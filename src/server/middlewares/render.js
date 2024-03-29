const path = require('path');
const randomJobs = require('../fixtures/random-jobs');
const highlightedJob = require('../fixtures/highlighted-job');
const config = require('../config');
const template = require('../../pages/template');

const publicDir = path.join(__dirname, '../../../public');

const dataCollecting = () => {
  return {
    page: 'job-details',
    highlightedJob,
    recommendedJobs: randomJobs,
  };
};

const sendResponse = (req, res) => {
  const App = require(path.join(publicDir, 'ssr'));

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
