import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tienda = ['Personaliza tú mismo', 'Idenas para regalar', 'Loque está en tendencia', 'Regalos para hombre', 'Regalos para mujer', 'Regalos para niños y bebes', 'Accesorios', 'Fechas especiales', 'Colecciones', 'Ofertas', 'Iniciar sesión'];
  nosotros = ['Conoce fuera del molde', 'Lo que nos hace diferentes', 'Vende tu arte', 'Iniciativas sociales', 'Prensa', 'Nuestra historia', 'Carreras', 'Blog de arte'];
  ayuda = ['Como cotizar', 'Pedidos al por mayor', 'Recuperar deseos o borrados', 'Rastrea tu pedido', 'Preguntas frecuentes', 'Gastos de envío', 'Tiempos de entrega', 'Garantía de devolución', 'Calidad de los articulos'];

  constructor() { }

  ngOnInit(): void {
  }

}
