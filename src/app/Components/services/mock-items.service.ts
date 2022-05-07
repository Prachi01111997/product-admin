import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InventoryItems } from '../Models/inventory-items';
import { IItemsService } from './i-items-service';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService implements IItemsService {
  updateItem: any
  deleteItem: any
  constructor() { }

  private InventoryItems: InventoryItems[] = [
    {
      id: 1,
      name: 'Pen Blue',
      description: 'Pen color is blue',
      price: 200
    },
    {
      id: 2,
      name: 'Pen Black',
      description: 'Pen color is black',
      price: 20
    }
  ];

  getInventoryItems(): Observable<InventoryItems[]> {
    return of(this.InventoryItems);
  }

  getItemById(id: any) {
    return this.InventoryItems.find(x => x.id == id);
  }

  addInventoryItem(newInventoryItem: InventoryItems): Observable<any> {
    return of(this.InventoryItems.push(newInventoryItem));
  }

  updateInventoryItem(id: any, updateInventoryItem: InventoryItems): Observable<any> {
    this.updateItem = this.InventoryItems.find(x => x.id == id);
    let index = this.InventoryItems.indexOf(this.updateItem);
    this.InventoryItems[index] = updateInventoryItem;
    return of(this.InventoryItems[index]);
  }


  deleteInventoryItems(inventoryItemId: any): Observable<any> {
    console.log(inventoryItemId);
    this.deleteItem = this.InventoryItems.find(x => x.id == inventoryItemId);
    let index = this.InventoryItems.indexOf(this.deleteItem);  
    console.log(index)
    this.InventoryItems.splice(index, 1);  
    return of(this.InventoryItems);
  }

}
