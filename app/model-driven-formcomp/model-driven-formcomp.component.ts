import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-formcomp',
  templateUrl: './model-driven-formcomp.component.html',
  styleUrls: ['./model-driven-formcomp.component.css']
})
export class ModelDrivenFormcompComponent {
myInfo=[]
  constructor(private formBuilder:FormBuilder){
 
  }
  // userForm = new FormGroup({
  //   name:new FormControl('',[ Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //   email:new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+')]),
  //   address: new FormGroup({
  //   state:new FormControl('',[ Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(5)]),
  //   city:new FormControl('',[ Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(4)]),
  //   postalcode:new FormControl('',[ Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(6), Validators.maxLength(6) ])
  //   })
  // })

  userForm = this.formBuilder.group({
    name:['',[ Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]],
    email:['',[ Validators.required, Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+')]],
    address: this.formBuilder.group({
    state:['',[ Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(5)]],
    city:['',[ Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(4)]],
    postalcode:['',[ Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(6), Validators.maxLength(6) ]]
    })
  })
    
    submitData(){
    console.log(this.userForm.value)
    this.myInfo.push(this.userForm.value)
    }

}
