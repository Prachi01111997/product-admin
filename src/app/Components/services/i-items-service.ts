import { Observable } from "rxjs";
import { InventoryItems } from "../Models/inventory-items";

export interface IItemsService {
    getInventoryItems(): Observable<InventoryItems[]>;

    // returns observable that resolves to ID of new todo
    addInventoryItem(newInventoryItem: InventoryItems): Observable<any>;

    // returns observable that resolves to status message
    updateInventoryItem(id:any,updateInventoryItem: InventoryItems): Observable<any>;

    // returns observable that resolves to status message
    deleteInventoryItems(inventoryItemId: number): Observable<any>;
}
