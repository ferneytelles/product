import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-borradores',
  templateUrl: './mis-borradores.component.html',
  styleUrls: ['./mis-borradores.component.css']
})
export class MisBorradoresComponent implements OnInit {

  resizeTime: NodeJS.Timer;
  height = '130px';

  texto = 'Selecciona el borrador de diseño sobre el cual deseas editar. (Regístrate y guarda tus diseños de forma permanente)';
  borradores = ['assets/img/3.png', 'assets/img/6.png', 'assets/img/4.png', 'assets/img/1.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/3.png', 'assets/img/1.png', 'assets/img/3.png', 'assets/img/8.png'];
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      this.setHeight();
    }, 200);
  }

  ngOnInit(): void {
    this.setHeight();
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
