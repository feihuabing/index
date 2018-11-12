const express = require("express");
const bodyParser = require("body-parser")
const product = require('./routes/product.js');
const user = require('./routes/user.js');

var app = express();
app.listen(80,()=>{
	console.log("个人服务器创建成功！");
})
app.use(express.static('./static'))
app.use(bodyParser.urlencoded({
		extended:false}
));
app.use('/product',product);
app.use('/user',user);

