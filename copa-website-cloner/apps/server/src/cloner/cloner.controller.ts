import { Controller, Post, Body } from '@nestjs/common';
import { ClonerService } from './cloner.service';
import { CloneWebsiteDto } from './dto/clone-website.dto';
import { CloneResultDto } from './dto/clone-result.dto';

@Controller('cloner')
export class ClonerController {
  constructor(private readonly clonerService: ClonerService) {}

  @Post()
  async cloneWebsite(@Body() cloneWebsiteDto: CloneWebsiteDto): Promise<CloneResultDto> {
    return this.clonerService.cloneWebsite(cloneWebsiteDto);
  }
}
