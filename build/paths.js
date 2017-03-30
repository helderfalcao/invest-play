var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';
var resourceRoot = 'resources/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  resources: resourceRoot + '**',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  resourceRoot : resourceRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
