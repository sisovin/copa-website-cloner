import { IsBoolean, IsString } from 'class-validator';

export class CloneResultDto {
  @IsBoolean()
  success: boolean;

  @IsString()
  message: string;
}
