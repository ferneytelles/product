import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  menu = ['Camisetas', 'Sacos', 'Gorras', 'Hoodies', 'Polos', 'Tazas', 'Libretas', 'Bolsas Ecológicas', 'Tennis', 'Posters', 'Mochila', 'Cubiertas de celular', 'Chaquetas'];
  images = {banner: '', image1: '', image2: '', image3: '', image4: '', image5: '', image6: '', image7: '', image8: '', image9: ''};

  constructor(private route: ActivatedRoute) {
    route.params.subscribe( data => {
      if (data.categori === 'hombres'){
        this.images.banner = 'assets/img/BannerHombres.png';
        this.images.image1 = 'assets/img/camisetas.png';
        this.images.image2 = 'assets/img/sacos.png';
        this.images.image3 = 'assets/img/gorras.png';
        this.images.image4 = 'assets/img/tazas.png';
        this.images.image5 = 'assets/img/libretas.png';
        this.images.image6 = 'assets/img/bolsas.png';
        this.images.image7 = 'assets/img/hoodies.png';
        this.images.image8 = 'assets/img/polos.png';
        this.images.image9 = 'assets/img/tennis.png';
      }else if (data.categori === 'mujeres') {
        this.images.banner = 'assets/img/BannerMujeres.png';
        this.images.image1 = 'assets/img/camisetasMujeres.png';
        this.images.image2 = 'assets/img/sacosMujeres.png';
        this.images.image3 = 'assets/img/gorrasMujeres.png';
        this.images.image4 = 'assets/img/tazasMujeres.png';
        this.images.image5 = 'assets/img/libretasMujeres.png';
        this.images.image6 = 'assets/img/bolsasMujeres.png';
        this.images.image7 = 'assets/img/hoodiesMujeres.png';
        this.images.image8 = 'assets/img/polosMujeres.png';
        this.images.image9 = 'assets/img/tennisMujeres.png';
      }
    } );
  }

  ngOnInit(): void {
  }


}
