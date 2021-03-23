import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-driven-formcomp',
  templateUrl: './temp-driven-formcomp.component.html',
  styleUrls: ['./temp-driven-formcomp.component.css']
})
export class TempDrivenFormcompComponent  {
  address= { street: '', city: '',postalcode:'' };
  submitData(formData:any){
    console.log(formData)

}
}