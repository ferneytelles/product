import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './product/main/main.component';
import { StoreComponent } from './product/store/store.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CategoriesComponent } from './product/categories/categories.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'store', component: StoreComponent},
  {path: 'categories/:categori', component: CategoriesComponent},
  {path: 'store/product', component: ProductDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
