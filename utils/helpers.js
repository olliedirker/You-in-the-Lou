// functions of the test from helpers.test.js
module.exports = {
  format_date: (date) => {
    var moment = require('moment-timezone');
    return `${moment(date).tz('America/Chicago').format('L')}`;
  },
  format_url: (url) => {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  format_break: (paragraph) => {
    return paragraph.replaceAll('\n', '<br />');
  },
};
