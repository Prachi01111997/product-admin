import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewItemComponent } from './Components/add-new-item/add-new-item.component';
import { ModifyItemComponent } from './Components/modify-item/modify-item.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home',component:ViewProductsComponent},
  { path:'home/add',component:AddNewItemComponent},
  { path:'home/edit/:id',component:ModifyItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
