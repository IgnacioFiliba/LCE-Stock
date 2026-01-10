import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockModule } from './stock/stock.module';
import { Producto } from './stock/producto.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'stock.db',
      entities: [Producto],
      synchronize: true,
    }),
    StockModule,
    AuthModule,
  ],
})
export class AppModule {}
