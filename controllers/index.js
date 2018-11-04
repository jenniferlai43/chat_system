const multer = require('multer');


module.exports = (app) => {
	//var upload = multer({ dest: '/uploads'});
	app.get('/', (req, res) => {
		res.render('index.ejs');
		//res.send("<h1>Hello World!</h1>");
	});

	/*
	app.post('/uploads', upload.single('pic') (req, res, next) =>{

	});
	*/
}