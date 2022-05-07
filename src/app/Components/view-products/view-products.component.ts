import { Component, OnInit } from '@angular/core';
import { MockItemsService } from '../services/mock-items.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  getInventoryItems:any;
  currentPage: any = 1;
  p:any;

  constructor(private service:MockItemsService) { }

  ngOnInit(): void {
    this.getProduct();
    this.p = 5
  }
  EntryPerPage(event: any): void {
    this.p = event.target.value;
    console.log(this.p);
    console.log(this.currentPage);
  }

  getProduct(){
    this.service.getInventoryItems().subscribe(
      data=>{
        this.getInventoryItems = data;
        console.log(data)
      }
    )
  }
  pageChanged(event: any) {
    console.log(event)
    this.currentPage = event;
  }
  delete(id:any){
    console.log("first")
    this.service.deleteInventoryItems(id).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
}
