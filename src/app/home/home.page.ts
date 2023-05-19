import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  precio1: number = 0;
  cantidad1: number = 0;
  precio2: number = 0;
  cantidad2: number = 0;
  resultado: string = '';
  precioPorCantidad1: number = 0;
  precioPorCantidad2: number = 0;
  ganador1: boolean = false;
  ganador2: boolean = false;

  compararPrecios() {
    if (
      this.precio1 > 0 &&
      this.cantidad1 > 0 &&
      this.precio2 > 0 &&
      this.cantidad2 > 0
    ) {
      this.precioPorCantidad1 = this.precio1 / this.cantidad1;
      this.precioPorCantidad2 = this.precio2 / this.cantidad2;

      console.log('precioPorCantidad1: ', this.precioPorCantidad1);
      console.log('precioPorCantidad2: ', this.precioPorCantidad2);

      if (this.precioPorCantidad1 < this.precioPorCantidad2) {
        this.resultado = 'Producto 1 es más barato';
        this.ganador1 = true;
      } else if (this.precioPorCantidad1 > this.precioPorCantidad2) {
        this.resultado = 'Producto 2 es más barato';
        this.ganador2 = true;
      } else {
        this.resultado = 'Ambos productos tienen el mismo precio';
      }
    }
  }
}
