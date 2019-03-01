import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import{Chatclass}from '../chatclass';
import{ HttpClient, HttpHeaders }from '@angular/common/http';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msg='';
  chat:Chatclass;
  timerID;
  allChats:Chatclass[]=[];
  constructor(private route:ActivatedRoute,private http:HttpClient) { }
 

  ngOnInit() {
    //const Email :string=this.route.snapshot.queryParamMap.get('Email');
    console.log("ID"+this.route.snapshot.queryParamMap.get('Email'));
      	this.loadAllChats();
  
    this.timerID = setInterval(() => {
          console.log("Timer");
          this.loadAllChats();
        }, 2000);

        this.chat={
          Email:this.route.snapshot.queryParamMap.get('Email'),
         
          ID:this.route.snapshot.queryParamMap.get('_id'),
          msg: ""
        };
        console.log("email value: " + this.chat.Email);
        console.log("id value: " + this.chat.ID);
      }
  loadAllChats():void{
        this.http.
        get("http://localhost:3000/api/get_chats").
        subscribe(
          data  => {
          console.log("chats loaded successfully ");
          console.log(data);
         this.allChats=[];
          for (var key in data) {
                  console.log(data[key].msg_db);
                  this.allChats.push(data[key]);
          }
          console.log(this.allChats[0]);
          },
          error  => {
          console.log("Error", error);
        });
      }
  onSend(){
   // alert(this.msg);
    this.http.post("http://localhost:3000/chat",this.chat).subscribe(
    data=>{
      //alert("Name:"+this.user.Email+" "+"password:"+this.user.passWord+" "+"Confrimpassword:"+this.user.confrimpassWord);
      //console.log("post req sucessfull",data);
    },
   error =>{
    console.log("error",error);
    });
  }

}
