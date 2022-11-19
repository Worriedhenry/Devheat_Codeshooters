const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
// const user=require('./Users')
// const UserChats=require('./UserChats')
const cors=require('cors')
const app=express()
const bcrypt=require('bcrypt')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/', function(req, res, next){
    console.log(req.body);
	var personInfo = req.body;


	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newPerson = new User({
							unique_id:c,
							email:personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});
app.post("/chats",(req,res)=>{
    console.log(req.body)
    const arr=["CHRD","MALANG"]
    res.send({arr:arr})
})
app.post('/login', function(req,res,next){
    console.log(req.body);
    res.send({"Success":"You can login now."});
	// User.findOne({email:req.body.email},function(err,data){
	// 	if(data){
			
	// 		if(data.password==req.body.password){
	// 			//console.log("Done Login");
	// 			req.session.userId = data.unique_id;
	// 			//console.log(req.session.userId);
	// 			res.send({"Success":"You can login now."});
	// 		}else{
	// 			res.send({"Success":"Wrong password!"});
	// 		}
	// 	}else{
	// 		res.send({"Success":"This Email Is not regestered!"});
	// 	}
	// });
})
app.post("/")
app.listen(3001,()=>{
    console.log("server running")
})
