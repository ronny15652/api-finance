import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  categoryId: number;

  @Column()
  amount: number;

  @Column({ type: 'timestamptz' })
  date: Date;
}
