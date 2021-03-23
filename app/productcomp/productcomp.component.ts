import { Component, OnInit } from '@angular/core';
import { ProductService } from '../sharedservices/product.service';

@Component({
  selector: 'app-productcomp',
  templateUrl: './productcomp.component.html',
  styleUrls: ['./productcomp.component.css']
})
export class ProductcompComponent implements OnInit {

  products = [];
  empErrorMsg ='';
 public searchText : string;
 SortbyParam: string = '';
 SortDirection: string = 'asc';
  saleDate:any = new Date()

  constructor(private prodService:ProductService) { }



  ngOnInit(): void {

    this.prodService.getProducts().subscribe(
      success => this.products = success,
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


