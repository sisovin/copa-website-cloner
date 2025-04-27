import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CloneJob {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  status: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
