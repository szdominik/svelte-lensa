const fs = require('fs');
const { template } = require('./src/pages/template');

const indexStr = template({ css: '', head: '', html: '' });

const indexPath = './public/index.html';

if (fs.existsSync(indexPath)) {
  fs.unlinkSync(indexPath);
}

fs.writeFileSync(indexPath, indexStr);
