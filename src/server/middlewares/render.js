const path = require('path');
const randomJobs = require('./random-jobs');
const highlightedJob = require('./highlighted-job');
const config = require('../config');
require('svelte/register');

const pages = path.join(__dirname, '../../pages');
const { template } = require(path.join(pages, 'template'));

const dataCollecting = () => {
  return {
    page: 'job-details',
    highlightedJob,
    recommendedJobs: randomJobs,
  };
};

const sendResponse = (req, res) => {
  const App = require(path.join(pages, 'app.svelte')).default;

  const { head, html, css } = App.render(res.locals);

  res.end(
    template({
      css: css.code,
      config,
      data: res.locals,
      head,
      html,
    })
  );
};

const render = (req, res) => {
  res.locals = dataCollecting();

  return sendResponse(req, res);
};

module.exports = {
  render,
};
