const path = require('path');
const polka = require('polka');
const serve = require('serve-static');

const { render } = require('./middlewares/render');

const publicDir = path.join(__dirname, '../../public');
const PORT = process.env.PORT || 3000;

polka()
  .use(serve(publicDir))
  .use('/', render)
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });
