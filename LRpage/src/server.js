const express =require('express');
const app =express();
const mongoose=require('mongoose');
const boby=require('body-parser');
const cros=require('cors');
app.use(boby.json());
var crosobj ={
    origin:"http://localhost:4200",
    optionSucessStatus:200
}
app.use(cros(crosobj));
//const login=mongoose.model('login',{name :String,password:String})
const message=mongoose.model('message',{msg_db :String})
const register=mongoose.model('register',
{
    Email:String,
    password1:String,
    Confrimpassword:String,
  
})
mongoose.connect('mongodb://localhost:27017/Authentication',{ useNewUrlParser: true });


  app.listen(3000,() =>{
  console.log("server listening the port 3000");
  });

            /*app.use('/api',function(req,res,next) {
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Methods','POST');
            res.header('Access-Control-Allow-Headers','Accept,Origin,Content-Type,access_token');
            res.header('Access-Control-Allow-Crendentials','true');
            next();
            });*/
            /*app.post('/api',(req,res)=>{
                console.log(" it Comess..!");
                console.log(req.method);
                
                var loginobj =new login();

                loginobj.name=req.body.userName;
                console.log(req.body.userName);

                loginobj.password=req.body.passWord;
                console.log(req.body.passWord);
                

                loginobj.save((err)=>{
                    res.send(loginobj);
                    console.log("ADDED");
            });
            });*/

                    app.post('/api',(req,res)=>{
                        console.log(" it Comess..post!");
                    register.
                    findOne({
                        Email:req.body.Email,
                        password1:req.body.passWord},
                        {Email:1},
                        (err,doc)=>{
                            if(err)
                                res.status(500).json(err);
                            else if(doc)
                            { 
                                console.log(doc);
                                res.status(200).json(doc);
                            }
                            else
                            res.status(401).json({msg:"Invalid login details..!"}); 
                             });
                    });


 app.post('/apinew',(req,res)=>{
   console.log("inside api new");
   console.log(req.body.Email + req.body.confrimpassWord+req.body.passWord );
     var registerobj =new register();
     registerobj.Email=req.body.Email;
     console.log(req.body.Email);
     registerobj.password1=req.body.passWord;
     console.log(req.body.passWord1);
     registerobj.Confrimpassword=req.body.confrimpassWord;
     console.log(req.body.Confrimpassword);
            registerobj.save((err)=>{
                res.send(registerobj);
                console.log("ADDED");
            });
        });

app.post('/chat',(req,res)=>{
    var registerobj =new message();
   registerobj.msg_db=req.body.msg;
    console.log(req.body.msg);
           registerobj.save((err)=>{
               res.send(registerobj);
               console.log("ADDED");
           });
        });
   
app.get("/api/get_chats", (req, res)=>{
            message.find({},
                {msg_db:1,_id:1},
                (err, docs)=>{
                if(err)
                    res.status(500).json(err);
                else if(docs)
                {
                    console.log(docs);
                    res.status(200).json(docs);
                }
            });
        });