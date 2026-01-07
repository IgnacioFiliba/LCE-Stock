import { Controller, Get, Param } from '@nestjs/common';
import { StockService, Producto } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  getAllStock(): Producto[] {
    return this.stockService.findAll();
  }

  @Get(':id')
  getStockById(@Param('id') id: string): Producto | undefined {
    return this.stockService.findOne(+id);  // Convierte id a número
  }
}
