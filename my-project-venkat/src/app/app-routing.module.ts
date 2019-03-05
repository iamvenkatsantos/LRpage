import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FrontComponent } from './front/front.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [{path:'',redirectTo:'login-signup',pathMatch:'full'},
{path:'login-signup',component:LoginSignupComponent},
{path:'front',component:FrontComponent},
{path:'staff',component:StaffComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
