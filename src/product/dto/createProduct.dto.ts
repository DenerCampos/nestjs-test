import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CharacteristicsDTO } from './characteristics.dto';
import { ImagesDTO } from './images.dto';

type characteristicsType = {
  name: string;
  description: string;
};

type imagesType = {
  url: string;
  description: string;
};

export class CreateProductDTO {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNumber()
  quantity: number;

  @IsString()
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CharacteristicsDTO)
  characteristics: characteristicsType[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagesDTO)
  images: imagesType[];

  @IsString()
  category: string;

  @IsDateString()
  createDate: Date;

  @IsDateString()
  updateDate: Date;
}
