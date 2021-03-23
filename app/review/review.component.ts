import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../sharedservices/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
reviews=[];
empErrorMsg ='';
public searchText : string;
SortbyParam: string = '';
SortDirection: string = 'asc';

  constructor(private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReview().subscribe(
      success => this.reviews = success,
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
