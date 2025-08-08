// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false,
  },
  // IMPORTANT: indique clairement où se trouvent les JSON
  localePath: path.resolve('./public/locales'),
};
