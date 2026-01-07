import { Injectable } from '@nestjs/common';

export interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
}

@Injectable()
export class StockService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Producto A', cantidad: 10 },
    { id: 2, nombre: 'Producto B', cantidad: 5 },
  ];

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
