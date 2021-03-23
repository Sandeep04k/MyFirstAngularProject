import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
myInfo=[]
  constructor(private formBuilder:FormBuilder){
 
  }

  userForm = this.formBuilder.group({
    name:['',[ Validators.required, Validators.pattern('^[a-z,A-Z\\s]{5,15}$')]],
    gender: ['',[ Validators.required]],
    email:['',[ Validators.required, Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+')]],
    phone:['',[ Validators.required, Validators.pattern('[0-9]+'),  Validators.minLength(10), Validators.maxLength(10)]],
    job:['',[ Validators.required,]]
  
  })
  get f(){
    return this.userForm.controls;
  }
  submitData(){
    console.log(this.userForm.value)
    this.myInfo.push(this.userForm.value)
  }
}
