import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express, { Request, Response, NextFunction } from 'express'; // Importação corrigida com tipos
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server'; // Caminho corrigido para o main.server

// A aplicação Express é exportada para que possa ser usada por funções serverless.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Exemplo de endpoints da API REST do Express
  // server.get('/api/**', (req, res) => { });

  // Servir arquivos estáticos da pasta /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // Todas as rotas regulares usam o engine do Angular
  server.get('*', (req: Request, res: Response, next: NextFunction) => { // Tipos adicionados
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Iniciar o servidor Node
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();