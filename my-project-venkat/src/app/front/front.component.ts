import { Component, OnInit } from '@angular/core';
import { Userform } from '../userform';
import{ HttpClient, HttpHeaders}from '@angular/common/http';
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {

  user:Userform={
    Fname:'',
    Lname:'',
    DOB:null,
    male:'',
    Father_name:'',
    Father_occup:'',
    Mother_name:'',
    Mother_oocup:'',
    pass_12:'',
    per_12:'',
    pass_10:'',
    per_10:'',
    pass_dip:'',
    deg_dep:'',
    Nationality:'',
    Community:'',
    Mobile_Number:null,
    Res_addr:'',
    Premanent_addr:'',
    Guardian_Detail:'',
    Guardian_name:'',
    Email:'',
   
    //image:null
  }
   constructor(private http:HttpClient){
     
   }
  
   onGetvalue()
   {

    alert("in value");
    this.http.post("http://localhost:3000/apinfo",this.user).subscribe(
     data=>{
       alert("post req sucessfull"+data);
       alert(this.user.Fname+'\n'+this.user.Lname+'\n'+this.user.DOB+'\n'+this.user.male+'\n'+this.user.Father_name+'\n'+this.user.Father_occup
       +'\n'+this.user.Mother_name+'\n'+this.user.Mother_oocup+'\n'+this.user.pass_12+'\n'+this.user.per_12+'\n'+this.user.pass_10+'\n'+this.user.per_10
       +'\n'+this.user.pass_dip+'\n'+this.user.deg_dep+'\n'+this.user.Guardian_Detail);
     console.log("post req sucessfull",data);
     },
    error =>{
 
     console.log("error",error);
     });
    }
}
