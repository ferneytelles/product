import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './product/main/main.component';
import { StoreComponent } from './product/store/store.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CategoriesComponent } from './product/categories/categories.component';
import { OffersComponent } from './product/offers/offers.component';
import { GiftCardsComponent } from './product/gift-cards/gift-cards.component';
import { IndexComponent } from './product/index/index.component';



const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'index', component: IndexComponent},
  {path: 'store/:ofertas', component: StoreComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'gift-cards', component: GiftCardsComponent},
  {path: 'categories/:categori', component: CategoriesComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
