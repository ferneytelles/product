import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() columnas: number;
  @Input() imgs: Array<any>;
  resizeTime: NodeJS.Timer;
  height = '155px';
  width = '25%';
  font = '13px';
  
  constructor(private modalService: ModalService) { }

  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      this.setImgHeight();
    }, 200);
  }

  ngOnInit(): void {
    this.setCardWidth();
    this.setImgHeight();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setCardWidth();
    this.setImgHeight();
  }

  modalDetalle(): void{
    this.modalService.detalle.next(true);
  }

  setCardWidth(): void{
    if (this.columnas === 5) {
      this.width = '20%';
    }else if (this.columnas === 4) {
      this.width = '25%';
    }else if (this.columnas === 3) {
      this.width = '33.3%';
    }else if (this.columnas === 2) {
      this.width = '50%';
    }
  }

  setImgHeight(): void{
    if (this.columnas === 5){
      // tamaño del texto de los botones del hover
      if (window.innerWidth >= 960 && window.innerWidth < 1000){
        this.font = '9px'
      }else if (window.innerWidth >= 1000 && window.innerWidth < 1100){
        this.font = '10px'
      }else if (window.innerWidth >= 1100 && window.innerWidth < 1150){
        this.font = '11px'
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1240){
        this.font = '12px'
      }else{
        this.font = '13px'
      }
      // tamaño de alto del contenedor de la imagen
      if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '130px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '145px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '165px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '185px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '210px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '225px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '250px';
      }else if (window.innerWidth >= 1950){
        this.height = '270px';
      }
    }else if (this.columnas === 4){
      this.font = '13px'
      if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '155px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '170px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '195px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '220px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '260px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '290px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '306px';
      }else if (window.innerWidth >= 1950){
        this.height = '330px';
      }
    }else if (this.columnas === 3){
      this.font = '13px'
      if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '200px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '245px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '275px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '310px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '345px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '380px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '410px';
      }else if (window.innerWidth >= 1950){
        this.height = '445px';
      }
    }else if (this.columnas === 2){
      this.font = '13px'
      if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '305px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '370px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '410px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '465px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '520px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '570px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '610px';
      }else if (window.innerWidth >= 1950){
        this.height = '670px';
      }
    }
  }

}
