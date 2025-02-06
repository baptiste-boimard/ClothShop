import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async getAllCarts() {
    return await this.cartRepository.find();
  }

  async createCart(createCartDto: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.cartRepository.save(createCartDto);
  }

  async updateCart(id: number, updateCartDto: any) {
    return await this.cartRepository.update(id, updateCartDto);
  }

  async deleteCart(id: number) {
    return await this.cartRepository.delete(id);
  }
}
