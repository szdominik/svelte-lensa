const randomJobs = require('./random-jobs');

const getMoreJobs = (req, res) => {
  const sendableJobs = randomJobs.map(({ title, ...rest }) => ({
    title: Math.floor(Math.random() * 100) + title,
    ...rest,
  }));
  res.end(JSON.stringify(sendableJobs));
};

module.exports = { getMoreJobs };
