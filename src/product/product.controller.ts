import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/createProduct.dto';

@Controller('/product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async create(@Body() dados: CreateProductDTO) {
    this.productRepository.create(dados);

    return {
      status: 'Produto criado',
      dados,
    };
  }

  @Get('/list')
  async list() {
    return this.productRepository.list();
  }
}
