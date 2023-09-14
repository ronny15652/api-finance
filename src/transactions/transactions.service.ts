import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = await this.prisma.transaction.create({
      data: createTransactionDto,
    });

    return transaction;
  }

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return transactions;
  }

  async findOne(id: number): Promise<Transaction | null> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });
    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
    return transaction;
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }

    // Atualize os campos da transação com base no DTO
    const updatedTransaction = await this.prisma.transaction.update({
      where: { id },
      data: updateTransactionDto,
    });

    return updatedTransaction;
  }

  async remove(id: number): Promise<void> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }

    await this.prisma.transaction.delete({
      where: { id },
    });
  }
}
