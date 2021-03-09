import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './product/menu/menu.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './product/carousel/carousel.component';
import { CardComponent } from './product/card/card.component';
import { DesignComponent } from './product/design/design.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DesignContentComponent } from './product/design/design-content/design-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    CardComponent,
    DesignComponent,
    DesignContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
