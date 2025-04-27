import { IsString, IsUrl } from 'class-validator';

export class CloneWebsiteDto {
  @IsUrl()
  url: string;

  @IsString()
  additionalData: string;
}
