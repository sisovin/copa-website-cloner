import { Test, TestingModule } from '@nestjs/testing';
import { ClonerController } from './cloner.controller';
import { ClonerService } from './cloner.service';
import { CloneWebsiteDto } from './dto/clone-website.dto';
import { CloneResultDto } from './dto/clone-result.dto';

describe('ClonerController', () => {
  let clonerController: ClonerController;
  let clonerService: ClonerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClonerController],
      providers: [
        {
          provide: ClonerService,
          useValue: {
            cloneWebsite: jest.fn().mockResolvedValue(new CloneResultDto()),
          },
        },
      ],
    }).compile();

    clonerController = module.get<ClonerController>(ClonerController);
    clonerService = module.get<ClonerService>(ClonerService);
  });

  it('should be defined', () => {
    expect(clonerController).toBeDefined();
  });

  it('should clone website', async () => {
    const cloneWebsiteDto = new CloneWebsiteDto();
    const result = await clonerController.cloneWebsite(cloneWebsiteDto);
    expect(result).toBeInstanceOf(CloneResultDto);
    expect(clonerService.cloneWebsite).toHaveBeenCalledWith(cloneWebsiteDto);
  });
});
