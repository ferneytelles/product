import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * conponente que tiene el contenido de la modal borrador
 */
@Component({
  selector: 'app-borrador-content',
  templateUrl: './borrador-content.component.html',
  styleUrls: ['./borrador-content.component.css']
})
export class BorradorContentComponent implements OnInit {

  /**
   * cadena que se emite para cerrar la modal en version movil
   */
  @Output() close = new EventEmitter<string>();
  /**
   * cadena que se emite para cerrar la modal
   */
  @Output() dismiss = new EventEmitter<string>();
  /**
   * variable que permite abrir la modal de borradores
   */
  @Output() openBorradores = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * funcion que sirve para abrir la modal borradores
   */
  modalBorradores(): void{
    this.openBorradores.emit();
  }
  /**
   * funcion que permite cerrar la modal
   * @param valor cadena que se emite para cerrar
   */
  closeModal(valor: string): void{
    this.close.emit(valor);
  }
  /**
   * funcion que permite cerrar la modal
   * @param valor cadena emitida para cerrar la modal
   */
  dismissModal(valor: string): void{
    this.dismiss.emit(valor);
  }
  /**
   * funcion que permite cerrar la modal en version movil
   */
  closeBorrador(): void{
    this.close.emit();
  }

}
