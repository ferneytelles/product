import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './product/main/main.component';
import { StoreComponent } from './product/store/store.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';


const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'store/product', component: ProductDetailComponent},
  {path: 'main', component: MainComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
