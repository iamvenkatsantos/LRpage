import { Component, OnInit } from '@angular/core';
import {userlogin}from '../userlogin';
import{ HttpClient, HttpHeaders}from '@angular/common/http';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  
user:userlogin={
  Email:"",
  passWord:null
  }
  constructor(private http:HttpClient ,private router:Router){}
  
     

  onGetvalue(){
   this.http.post("http://localhost:3000/api",this.user).subscribe(
    data=>{
     // alert("post req sucessfull"+this.user);
     // alert(this.user.Email+'\n'+this.user.passWord);
    console.log("post req sucessfull",data);
    this.router.navigate(["/","chat",], { queryParams:data});
   
    },
   error =>{

    console.log("error",error);
    });
   }
   onclear(){
    this.user.Email="";
    this.user.passWord="";
   }
}
