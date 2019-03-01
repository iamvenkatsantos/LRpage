import { Component, OnInit } from '@angular/core';
import {User}from '../user';
import{ HttpClient, HttpHeaders}from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

 

  user:User={
   
    Email:"",
    passWord:"",
    confrimpassWord:""
  }
  constructor(private http:HttpClient,private router:Router){}
  
  

  onGetvalue(){
   //this.user.Email="";
   
   // alert(this.user.Email);
   this.http.post("http://localhost:3000/apinew",this.user).subscribe(
    data=>{
      //alert("Name:"+this.user.Email+" "+"password:"+this.user.passWord+" "+"Confrimpassword:"+this.user.confrimpassWord);
      console.log("post req sucessfull",data);
      this.router.navigate(["/","login",]);
    },
   error =>{

    console.log("error",error);
    });
   }
}
