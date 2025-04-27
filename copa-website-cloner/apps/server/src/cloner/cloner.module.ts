import { Module } from '@nestjs/common';
import { ClonerController } from './cloner.controller';
import { ClonerService } from './cloner.service';

@Module({
  controllers: [ClonerController],
  providers: [ClonerService],
})
export class ClonerModule {}
