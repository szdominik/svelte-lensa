const path = require('path');
require('svelte/register');

const pages = path.join(__dirname, '../../pages');
const { template } = require(path.join(pages, 'template'));

const render = (req, res) => {
  const App = require(path.join(pages, 'app.svelte')).default;

  const { head, html, css } = App.render({
    page: 'job-details'
  });

  res.end(template({
    css: css.code,
    head,
    html
  }));
};

module.exports = {
  render,
};
