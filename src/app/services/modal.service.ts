import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * servicio que sirve para ejecutar las modales
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  /**
   * Variable que permite ejecutar la modal de cambiar producto, del editor
   */
  producto: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal diseño, del editor
   */
  disenio: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal de borrador, del editor
   */
  borrador: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal de borradores, del editor
   */
  borradores: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal de detalles del producto,
   * con la opción de seleccionar producto
   */
  detalle: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal de detalles del producto,
   * sin la opción de seleccionar producto
   */
  detalle2: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal de guía de tallas
   */
  sizeGuide: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal de tallas
   */
  sizes: Subject<boolean> = new Subject<boolean>();
  /**
   * Variable que permite ejecutar la modal de compartir
   */
  share: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
