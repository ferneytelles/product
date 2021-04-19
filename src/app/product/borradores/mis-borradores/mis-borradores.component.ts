import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mis-borradores',
  templateUrl: './mis-borradores.component.html',
  styleUrls: ['./mis-borradores.component.css']
})
export class MisBorradoresComponent implements OnInit {

  @ViewChild('contenedor', {static: true}) contenedor: ElementRef;
  @Output() close = new EventEmitter<string>();
  resizeTime: NodeJS.Timer;
  height = '130px';

  texto = 'Selecciona el borrador de diseño sobre el cual deseas editar. (Regístrate y guarda tus diseños de forma permanente)';
  borradores = ['assets/img/3.png', 'assets/img/6.png', 'assets/img/4.png', 'assets/img/1.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/3.png', 'assets/img/1.png', 'assets/img/3.png', 'assets/img/8.png'];

  constructor() {
    if (window.innerWidth <= 960){
      this.height = 'auto';
    }
   }

  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      this.setHeight();
    }, 200);
  }

  ngOnInit(): void {
    this.setHeight();
    // condicion que detecta si el dispositivo es iPhone
    if (/iPad|iPhone/.test(navigator.userAgent)) {
      console.log('iphone');
      //  asignacion de relleno en la parte inferior para dispositivos iphone
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
    //  condicion que detecta si se accede desde chrome en dispositivos android
    if (/Android/.test(navigator.userAgent) && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      // asignacion de relleno en la parte inferior para chrome en dispositivos android
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
  }

  closeBorradores(valor: string): void{
    this.close.emit(valor);
  }

  setHeight(): void{
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
  }

}
