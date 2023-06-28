var exp=require('express');
var app=exp()

app.listen(9000,function(){
    console.log("server started at 9000");
})

app.use(exp.static('images'));
app.get('/login',function(req,res){
    res.sendFile(__dirname+"/assign2login.html");
});