import { characteristicsType, imagesType } from './types/productType';

export class ProductEntity {
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  characteristics: characteristicsType[];
  images: imagesType[];
  category: string;
  createDate: Date;
  updateDate: Date;
}
