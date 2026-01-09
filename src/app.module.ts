import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockModule } from './stock/stock.module';
import { Producto } from './stock/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'stock.db',
      entities: [Producto],
      synchronize: true,
    }),
    StockModule,
  ],
})
export class AppModule {}
