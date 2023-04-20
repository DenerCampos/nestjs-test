import { IsNotEmpty, IsString } from 'class-validator';

export class ImagesDTO {
  @IsNotEmpty()
  url: string;

  @IsString()
  description: string;
}
