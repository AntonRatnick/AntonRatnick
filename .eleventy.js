const postcss = require('postcss');
const htmlmin = require('html-minifier');
const precss = require('precss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const dateFilter = require('./src/filters/date.js');

module.exports = (config) => {
  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  config.addNunjucksAsyncFilter('postCSS', (code, callback) =>
    postcss([precss, autoprefixer,  cssnano])
      .process(code)
      .then((res) => callback(null, res))
  );

  config.addFilter('date', dateFilter);

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
  };
};
