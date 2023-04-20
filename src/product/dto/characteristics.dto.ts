import { IsNotEmpty, IsString } from 'class-validator';

export class CharacteristicsDTO {
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}
