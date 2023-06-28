var exp=require('express');
var app=exp()

app.listen(9000,function(){
    console.log("server started at 9000");
})

app.use(exp.static('images'));
// app.get('/login',function(req,res){
//     res.sendFile(__dirname+"/assign2login.html");
// });

app.get('/login',function(req,res){
<<<<<<< HEAD
        res.send("hi hdjhwdbhj");
     });
=======
    res.sendFile(__dirname+"/assign2login.html");
});
>>>>>>> 39640887ff23baf2eb184770a78db20a964cac4a
