import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { StockService } from './stock.service';
import type { Producto } from './stock.service';
import { CreateProductoDto } from './create-producto.dto';
import { UpdateProductoDto } from './update-producto.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  getAllStock(): Producto[] {
    return this.stockService.findAll();
  }

  @Get(':id')
  getStockById(@Param('id') id: string): Producto {
    return this.stockService.findOne(+id);
  }

  @Post()
  createProducto(@Body() createProductoDto: CreateProductoDto): Producto {
    return this.stockService.create(createProductoDto);
  }

  @Put(':id')
  updateProducto(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): Producto {
    return this.stockService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  deleteProducto(@Param('id') id: string): void {
    this.stockService.remove(+id);
  }
}
