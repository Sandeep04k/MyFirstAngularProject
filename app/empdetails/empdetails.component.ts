import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../sharedservices/employee.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  employees = [];
  empErrorMsg ='';
  public searchText : string;
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      success => this.employees = success,
      error => this.empErrorMsg = error
      )
      }
      onSortDirection() {
        if (this.SortDirection === 'desc') {
          this.SortDirection = 'asc';
        } else {
          this.SortDirection = 'desc';
        }
      }
  }


