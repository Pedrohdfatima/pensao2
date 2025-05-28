
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pensao/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pensao"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 936, hash: 'e79fa77c29e53b22f7c56091545f637e90626ac73d06663e7a274040670147c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '1f50363ac332603ce7b73564b992f723e7861fed22ce909fff4994d782336e85', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7779, hash: 'ca7cd221e2866cbe969fa4935788122cdf587e621c74e6dd9325721eb51952c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4BGBLKJW.css': {size: 2275, hash: 'vzh5r3R5tVs', text: () => import('./assets-chunks/styles-4BGBLKJW_css.mjs').then(m => m.default)}
  },
};
