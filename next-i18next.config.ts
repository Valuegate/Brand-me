const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'ro', 'lt', 'it', 'es', 'de'],
    localePath: path.resolve('./src/locales'),
  },
};