import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('allcarts')
  getAllCarts() {
    const coucou = this.cartService.getAllCarts();
    console.log('GET /cart/allcarts', coucou);
    return coucou;
  }

  @Post('createcart')
  createCart(@Body() createCartDto: any) {
    return this.cartService.createCart(createCartDto);
  }

  @Put('updatecart:id')
  updateCart(@Param('id') id: string, @Body() updateCartDto: any) {
    return this.cartService.updateCart(+id, updateCartDto);
  }

  @Delete('delete:id')
  deleteCart(@Param('id') id: string) {
    return this.cartService.deleteCart(+id);
  }
}
