import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // modales
  disenio: Subject<boolean> = new Subject<boolean>();
  borrador: Subject<boolean> = new Subject<boolean>();
  borradores: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
