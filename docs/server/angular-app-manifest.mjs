
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
    'index.csr.html': {size: 936, hash: 'ba9288d044eda158e86a08ef677622f0051095b425bb4cc5c7596968df3be56d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '3a43231d2d7fc7161144cd91a1cc2de42363978348899c91319267287ad7d1a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7779, hash: '6cf3595104c6571636f1ec6094348a15430a5b451010f3f533263e73f2c402f9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4BGBLKJW.css': {size: 2275, hash: 'vzh5r3R5tVs', text: () => import('./assets-chunks/styles-4BGBLKJW_css.mjs').then(m => m.default)}
  },
};
