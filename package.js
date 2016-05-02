var version = '0.2.0';

Package.describe({
  name: 'zodiase:infinite-load.no-import',
  version: version,
  summary: 'Load zodiase:infinite-load without importing it.',
  git: 'https://github.com/Zodiase/meteor-infinite-load.no-import.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('zodiase:infinite-load@' + version);
  api.addFiles('import.js', ['client', 'server']);
  api.export('InfiniLoad', ['client', 'server']);
});
