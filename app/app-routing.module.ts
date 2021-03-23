import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvjavaComponent } from './advjava/advjava.component';
import { AngularComponent } from './angular/angular.component';
import { ContactComponent } from './contact/contact.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { CourseComponent } from './course/course.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { LoginComponent } from './login/login.component';
import { ModelDrivenFormcompComponent } from './model-driven-formcomp/model-driven-formcomp.component';
import { PassComponent } from './pass/pass.component';
import { ProductcompComponent } from './productcomp/productcomp.component';
import { PythonComponent } from './python/python.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewComponent } from './review/review.component';
import { TechComponent } from './tech/tech.component';
import { TempDrivenFormcompComponent } from './temp-driven-formcomp/temp-driven-formcomp.component';
import { WebComponent } from './web/web.component';

// const routes: Routes = [
//   { path:'java', component:JavaComponent,
//   children:[
//     {path:'coreJava', component:CorejavaComponent},
//     {path:'advJava', component:AdvjavaComponent}, 
//     ]},
//   { path:'web', component:WebComponent},
//   { path:'productcomp', component:ProductcompComponent},
//  { path:'empdetails', component:EmpdetailsComponent},
//  { path:'home', component:HomeComponent},
//  {path:'temp-driven-formcomp', component:TempDrivenFormcompComponent},
//  {path:'model-driven-formcomp', component:ModelDrivenFormcompComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// export const routingComponents = [ProductcompComponent,EmpdetailsComponent, HomeComponent, CorejavaComponent, AdvjavaComponent, ModelDrivenFormcompComponent]



const routes: Routes = [
  { path:'tech', component:TechComponent,
  children:[
    {path:'course', component:CourseComponent},
    {path:'angular', component:AngularComponent},
    {path:'python', component:PythonComponent} 
    ]},
 
    { path:'review', component:ReviewComponent},
 { path:'home', component:HomeComponent},
 {path:'registration', component:RegistrationComponent},
 {path:'pass', component:PassComponent},
 {path:'login', component:LoginComponent},
 {path:'contact', component:ContactComponent},
 { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, PassComponent, TechComponent,CourseComponent, CorejavaComponent, AdvjavaComponent, ModelDrivenFormcompComponent, ReviewComponent, RegistrationComponent, ContactComponent,AngularComponent,PythonComponent]
