import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './create-producto.dto';
import { UpdateProductoDto } from './update-producto.dto';

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
  private nextId = 3;

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number): Producto {
    const producto = this.productos.find(p => p.id === id);
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  create(createProductoDto: CreateProductoDto): Producto {
    const nuevoProducto: Producto = {
      id: this.nextId++,
      ...createProductoDto,
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  update(id: number, updateProductoDto: UpdateProductoDto): Producto {
    const producto = this.findOne(id);
    Object.assign(producto, updateProductoDto);
    return producto;
  }

  remove(id: number): void {
    const index = this.productos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    this.productos.splice(index, 1);
  }
}
