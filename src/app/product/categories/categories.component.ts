import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que contiene la landing de categoría
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  /**
   * Arreglo que contiene las opciones del menu.
   */
  menu = ['Camisetas', 'Sacos', 'Gorras', 'Hoodies', 'Polos', 'Tazas', 'Libretas', 'Bolsas Ecológicas', 'Tennis', 'Posters', 'Mochila', 'Cubiertas de celular', 'Chaquetas'];
  /**
   * Arreglo que contiene la ruta de las imagenes
   */
  images = {banner: '', image1: '', image2: '', image3: '', image4: '', image5: '', image6: '', image7: '', image8: '', image9: ''};
  /**
   * Cadena la categoría recibida por parametro
   */
  categori: string;
  /**
   * Cadena que contiene el texto para el banner superior
   */
  text: string;

  /**
   * Contructor que llama al modulo de la ruta activa, y se asigna
   * la ruta de las imagenes correspondientes dependiendo la categoría
   * @param route Modulo que permite recibir los parametros de la ruta
   */
  constructor(private route: ActivatedRoute) {
    route.params.subscribe( data => {
      if (data.categori === 'hombres'){
        if (window.innerWidth <= 830){
          this.images.banner = 'assets/img/BannerHombresMovil.png';
        }else{
          this.images.banner = 'assets/img/BannerHombres.png';
        }
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
        if (window.innerWidth <= 830){
          this.images.banner = 'assets/img/BannerMujeresMovil.png';
        }else{
          this.images.banner = 'assets/img/BannerMujeres.png';
        }
        this.menu[4] = 'Crop Tops';
        this.images.image1 = 'assets/img/camisetasMujer.png';
        this.images.image2 = 'assets/img/sacosMujer.png';
        this.images.image3 = 'assets/img/gorrasMujer.png';
        this.images.image4 = 'assets/img/tazas.png';
        this.images.image5 = 'assets/img/libretasMujer.png';
        this.images.image6 = 'assets/img/bolsas.png';
        this.images.image7 = 'assets/img/hoodiesMujer.png';
        this.images.image8 = 'assets/img/cropMujer.png';
        this.images.image9 = 'assets/img/tennis.png';
      }
      this.categori = data.categori;
      this.text = `Encuentra los mejores diseños para ${this.categori} en camisetas, hoddies y mucho más.`;
    } );
  }

  ngOnInit(): void {
  }


}
