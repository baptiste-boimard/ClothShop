// product.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('allproducts')
  getAllProducts() {
    console.log('GET /products/allproducts');
    return this.productService.getAll();
  }
}
