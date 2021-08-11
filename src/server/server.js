const path = require('path');
const polka = require('polka');
const serve = require('serve-static');

const { render } = require('./middlewares/render');
const { getMoreJobs } = require('./middlewares/recommender');

const publicDir = path.join(__dirname, '../../public');
const PORT = process.env.PORT || 3000;

const app = polka()
  .use(serve(publicDir))
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });

app.get('/', render);
app.post('/get-more-jobs', getMoreJobs);
