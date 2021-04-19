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
  modalBorradores(): void{
    this.openBorradores.emit();
  }
  closeModal(valor: string): void{
    this.close.emit(valor);
  }
  dismissModal(valor: string): void{
    this.dismiss.emit(valor);
  }
  closeBorrador(): void{
    this.close.emit();
  }

}
