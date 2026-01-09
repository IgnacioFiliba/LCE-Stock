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
import { Producto } from './producto.entity';
import { CreateProductoDto } from './create-producto.dto';
import { UpdateProductoDto } from './update-producto.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async getAllStock(): Promise<Producto[]> {
    return this.stockService.findAll();
  }

  @Get(':id')
  async getStockById(@Param('id') id: string): Promise<Producto> {
    return this.stockService.findOne(+id);
  }

  @Post()
  async createProducto(
    @Body() createProductoDto: CreateProductoDto,
  ): Promise<Producto> {
    return this.stockService.create(createProductoDto);
  }

  @Put(':id')
  async updateProducto(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    return this.stockService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  async deleteProducto(@Param('id') id: string): Promise<void> {
    return this.stockService.remove(+id);
  }
}
