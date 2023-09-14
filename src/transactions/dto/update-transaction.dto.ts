import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';

import { IsString, IsOptional, IsDate, IsNumber } from 'class-validator';
export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsNumber()
  readonly amount?: number;

  @IsOptional()
  @IsDate()
  readonly date?: Date;

  @IsOptional()
  @IsNumber()
  readonly categoryId: number;
}
