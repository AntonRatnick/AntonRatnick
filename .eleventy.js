const postcss = require("postcss");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const dateFilter = require('./src/filters/date.js');

module.exports = (config) => {
  config.addNunjucksAsyncFilter("postCSS", (code, callback) =>
    postcss([precss, autoprefixer])
      .process(code)
      .then((res) => callback(null, res))
  );

  config.addFilter('date', dateFilter);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
