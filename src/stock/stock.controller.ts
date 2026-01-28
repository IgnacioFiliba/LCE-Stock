import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './create-producto.dto';
import { UpdateProductoDto } from './update-producto.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async getAllStock(): Promise<Producto[]> {
    return this.stockService.findAll();
  }

  @Get()
  async getAllStockk(): Promise<Producto[]> {
    return this.stockService.findAll();
  }

  @Get(':id')
  async getStockById(@Param('id', ParseIntPipe) id: number): Promise<Producto> {
    return this.stockService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProducto(
    @Body() createProductoDto: CreateProductoDto,
  ): Promise<Producto> {
    return this.stockService.create(createProductoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateProducto(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    return this.stockService.update(id, updateProductoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProducto(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.stockService.remove(id);
  }
}
