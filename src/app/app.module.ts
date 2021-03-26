import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './product/menu/menu.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './product/carousel/carousel.component';
import { CardComponent } from './product/card/card.component';
import { DesignComponent } from './product/design/design.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DesignContentComponent } from './product/design/design-content/design-content.component';
import { ResultsComponent } from './product/design/results/results.component';
import { CheckboxComponent } from './product/design/checkbox/checkbox.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './product/design/slider/slider.component';
import { ResultsContentComponent } from './product/design/results-content/results-content.component';
import { BorradorComponent } from './product/borrador/borrador.component';
import { BorradoresComponent } from './product/borradores/borradores.component';
import { MisBorradoresComponent } from './product/borradores/mis-borradores/mis-borradores.component';
import { CambiarComponent } from './product/cambiar/cambiar.component';
import { FiltrosCambiarComponent } from './product/cambiar/filtros-cambiar/filtros-cambiar.component';
import { RadioComponent } from './product/radio/radio.component';
import { ColoresComponent } from './product/colores/colores.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    CardComponent,
    DesignComponent,
    DesignContentComponent,
    ResultsComponent,
    CheckboxComponent,
    SliderComponent,
    ResultsContentComponent,
    BorradorComponent,
    BorradoresComponent,
    MisBorradoresComponent,
    CambiarComponent,
    FiltrosCambiarComponent,
    RadioComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
