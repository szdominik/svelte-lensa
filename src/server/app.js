const path = require('path');
const polka = require('polka');
const serve = require('serve-static');

const dir = path.join(__dirname, '../../public');
const PORT = process.env.PORT || 3000;

polka()
	.use(serve(dir))
	.listen(PORT, err => {
		if (err) throw err;
		console.log(`> Running on localhost:${PORT}`);
	});
