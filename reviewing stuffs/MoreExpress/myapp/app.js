var express=require('express');
var app=express();

var port=3005;

app.get("/",(req,res) => {
    res.render('home.ejs')
})

app.listen(port,() => {
    console.log('server is listening')
})