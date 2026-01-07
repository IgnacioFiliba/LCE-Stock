import { IsString, IsNumber, Min } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  @Min(0)
  cantidad: number;
}
