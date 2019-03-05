const express =require('express');
const app =express();
const mongoose=require('mongoose');
const boby=require('body-parser');
const cros=require('cors');
app.use(boby.json());
var crosobj ={
    orign:"http://localhost:4200",
    optionSucessStatus:200
}
app.use(cros(crosobj));
app.use(boby.urlencoded({extended:false}));

const info=mongoose.model('studentinfo',{
    fname :String,
    lname:String,
    DOB:Date,
    male:String,
    Father_name:String,
    Father_occup:String,
    Mother_name:String,
    Mother_oocup:String,
    pass_12:String,
    per_12:String,
    pass_10:String,
    per_10:String,
    pass_dip:String,
    deg_dep:String,
    Nationality:String,
    Community:String,
    Mobile_Number:String,
    Res_addr:String,
    Email_db:String,
    Premanent_addr:String,
    Guardian_Detail:String,
    Guardian_name:String,
    flagstatus:Number,
    id:String
    //image:ImageData

})
//const register=mongoose.model('register',{Email :String,password1:String, Confrimpassword : String})
mongoose.connect('mongodb://localhost:27017/DBforInfo',{ useNewUrlParser: true });
const register=mongoose.model('register',
{
    Email:String,
    password1:String,
    Confrimpassword:String,
  
})

app.listen(3000,() =>{
console.log("server listening the port 3000");
});

   /* app.use('/api',function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','POST');
    res.header('Access-Control-Allow-Headers','Accept,Origin,Content-Type,access_token');
    res.header('Access-Control-Allow-Crendentials','true');
    next();
    });*/
app.post('/apinfo',(req,res)=>{
    console.log(" it Comess..!");
    console.log(req.method);
    
    var infobj =new info();

    infobj.fname=req.body.Fname;
    infobj.lname=req.body.Lname;
    infobj.DOB=req.body.DOB;
    infobj.male=req.body.male;
    infobj.Father_name=req.body.Father_name;
    infobj.Father_occup=req.body.Father_occup;
    infobj.Mother_name=req.body.Mother_name;
    infobj.Mother_oocup=req.body.Mother_occup;
    infobj.pass_12=req.body.pass_12;
    infobj.per_12=req.body.per_12;
    infobj.pass_10=req.body.pass_10;
    infobj.per_10=req.body.per_10;
    infobj.pass_dip=req.body.pass_dip;
    infobj.deg_dep=req.body.deg_dep;
    infobj.Nationality=req.body.Nationality;
    infobj.Community=req.body.Community;
    infobj.Mobile_Number=req.body.Mobile_Number;
    infobj.Res_addr=req.body.Res_addr;
    infobj.Premanent_addr=req.body.Premanent_addr;
    infobj.Guardian_Detail=req.body.Guardian_Detail;
    infobj.Guardian_name=req.body.Guardian_name;
    infobj.Email_db=req.body.Email;
    infobj.flagstatus=0;
   
    
    
    //infobj.image=req.body.image;
    infobj.save((err)=>{
        res.send(infobj);
        console.log("ADDED");
        
   });
});

/*app.use('/apinew',function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','POST');
    res.header('Access-Control-Allow-Headers','Accept,Origin,Content-Type,access_token');
    res.header('Access-Control-Allow-Crendentials','true');
    next();
    });

 app.post('/apinew',(req,res)=>{
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
});*/
app.get("/api/get_chats/show", (req, res)=>{
    console.log("in getchats api");
  
    info.find({flagstatus:0},
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
           console.log(docs);
         // console.log("suma"+info.Email_db);
            res.status(200).json(docs);
        }
    });
});
app.get("/api/get_chats/accept", (req, res)=>{
    console.log("in getchats api");
  
    info.find({flagstatus:1},
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
           console.log(docs);
         // console.log("suma"+info.Email_db);
            res.status(200).json(docs);
        }
    });
});
app.get("/api/get_chats/decline", (req, res)=>{
    console.log("in getchats api");
  
    info.find({flagstatus:-1},
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
           console.log(docs);
         // console.log("suma"+info.Email_db);
            res.status(200).json(docs);
        }
    });
});
    
   /* info.update({'_id': ObjectId("5c797a6e0cfc092f10257a4e") },{$set:{'flagstatus':7 }},
    
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
            console.log(docs);
            res.status(200).json(docs);
        }
    });*/

    app.get("/api/update/:id", (req, res)=>{
     
                
                console.log(req.params.id);
        //info.update( findById(req.body.id) ,{$set:{'flagstatus':7 }},
       //var infobj =new info();
       // infobj.id=req.body.id;
       
       info.updateOne({'Email_db':req.params.id},{$set:{'flagstatus':1 }},
  
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
    app.get("/api/update/decline/:id", (req, res)=>{
     
                
        console.log(req.params.id);
//info.update( findById(req.body.id) ,{$set:{'flagstatus':7 }},
//var infobj =new info();
// infobj.id=req.body.id;

info.updateOne({'Email_db':req.params.id},{$set:{'flagstatus':-1 }},

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
        res.status(401).json({msg:"Invalid login details..!api"}); 
         });
});
app.post('/api/staff',(req,res)=>{
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