import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProdutoModule } from './product/product.module';

@Module({
  imports: [UserModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
