let express = require('express'); //web server 동작 프로그램
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
