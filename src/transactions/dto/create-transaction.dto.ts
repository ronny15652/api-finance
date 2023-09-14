import { IsString, IsNumber, IsDate } from 'class-validator';
export class CreateTransactionDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly amount: number;

  @IsDate()
  readonly date: Date;

  @IsNumber()
  readonly categoryId: number;
}
