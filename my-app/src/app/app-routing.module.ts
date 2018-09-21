import { ItemsComponent } from './items/items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports : [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { 
  
}
