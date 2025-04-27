import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloneJob } from './entities/clone-job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [CloneJob],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CloneJob]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
