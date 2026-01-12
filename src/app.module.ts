import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'stock.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    StockModule,
  ],
})
export class AppModule {}
