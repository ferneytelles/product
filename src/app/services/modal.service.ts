import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * servicio que sirve para ejecutar las modales del editor:
 * modal de cambiar producto, diseño, borrador, borradores y detalles
 * de producto
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  producto: Subject<boolean> = new Subject<boolean>();
  disenio: Subject<boolean> = new Subject<boolean>();
  borrador: Subject<boolean> = new Subject<boolean>();
  borradores: Subject<boolean> = new Subject<boolean>();
  detalle: Subject<boolean> = new Subject<boolean>();
  detalle2: Subject<boolean> = new Subject<boolean>();
  sizeGuide: Subject<boolean> = new Subject<boolean>();
  sizes: Subject<boolean> = new Subject<boolean>();
  share: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
