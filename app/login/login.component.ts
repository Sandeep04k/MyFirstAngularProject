import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// loginData=[{"name":"sandeep", "password": "Qwerty123"},
// {"name":"amey", "password": "Qwerty123"},
// ]

// name:string = "";
// password:string = "";
authenticate:string;
uname=["sandeep","pritesh"];
pass = ["Qwerty@123", "Qwerty@123"]


  constructor(private formBuilder:FormBuilder) { }

  userForm = this.formBuilder.group({
    name:['',[ Validators.required]],
   
    email:['',[ Validators.required]],
    password: ['',[ Validators.required]],
  
  })

  submitData(data) {
    console.log(data.name, data.password)

    // for (let user of this.loginData) {
    //   if ((data.name == user.name) && (data.password == user.password)) {

    for (var i=0; i <  this.uname.length; i++)
{

    if ((data.name == this.uname[i]) && (data.password == this.pass[i]))
    {
      window.location.href= '/home';
  
    
    }
 
  else{
    this.authenticate = 'Invalid Credentials';
  }
}
  }

}
