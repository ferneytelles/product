import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { ResultadosComponent } from './product/cambiar/resultados/resultados.component';
import { ProductosComponent } from './product/cambiar/productos/productos.component';
import { DetalleComponent } from './product/detalle/detalle.component';
import { InfoComponent } from './product/detalle/info/info.component';
import { StoreComponent } from './product/store/store.component';
import { MainComponent } from './product/main/main.component';
import { FiltrosRadioComponent } from './product/filtros-radio/filtros-radio.component';
import { FiltrosCheckComponent } from './product/filtros-check/filtros-check.component';
import { FiltrosColorComponent } from './product/filtros-color/filtros-color.component';
import { FiltroPrecioComponent } from './product/filtro-precio/filtro-precio.component';
import { CarouselStyleComponent } from './product/carousel-style/carousel-style.component';
import { DesignInfoComponent } from './product/design/design-info/design-info.component';
import { BorradorContentComponent } from './product/borrador/borrador-content/borrador-content.component';
import { FiltrosComponent } from './product/filtros/filtros.component';
import { OrderingComponent } from './product/ordering/ordering.component';
import { CardStoreComponent } from './product/card-store/card-store.component';
import { ColoresRadioComponent } from './product/detalle/colores-radio/colores-radio.component';
import { PaginationComponent } from './product/pagination/pagination.component';
import { TagsComponent } from './product/tags/tags.component';
import { InformationComponent } from './product/information/information.component';
import { FooterComponent } from './product/footer/footer.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { VentaCruzadaComponent } from './product/venta-cruzada/venta-cruzada.component';
import { TallasComponent } from './product/tallas/tallas.component';
import { ToShareComponent } from './product/to-share/to-share.component';
import { ColorDetailComponent } from './product/product-detail/color-detail/color-detail.component';
import { InfoDetailComponent } from './product/product-detail/info-detail/info-detail.component';
import { ImageDetailComponent } from './product/product-detail/image-detail/image-detail.component';



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
    ColoresComponent,
    ResultadosComponent,
    ProductosComponent,
    DetalleComponent,
    InfoComponent,
    StoreComponent,
    MainComponent,
    FiltrosRadioComponent,
    FiltrosCheckComponent,
    FiltrosColorComponent,
    FiltroPrecioComponent,
    CarouselStyleComponent,
    DesignInfoComponent,
    BorradorContentComponent,
    FiltrosComponent,
    OrderingComponent,
    CardStoreComponent,
    ColoresRadioComponent,
    PaginationComponent,
    TagsComponent,
    InformationComponent,
    FooterComponent,
    ProductDetailComponent,
    VentaCruzadaComponent,
    TallasComponent,
    ToShareComponent,
    ColorDetailComponent,
    InfoDetailComponent,
    ImageDetailComponent
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
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
