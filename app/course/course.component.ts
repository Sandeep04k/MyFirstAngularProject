import { Component, OnInit } from '@angular/core';
import { CourseService } from '../sharedservices/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses=[];
  empErrorMsg ='';
  public searchText : string;
  SortbyParam: string = '';
  SortDirection: string = 'asc';
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourse().subscribe(
      success => this.courses = success,
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
