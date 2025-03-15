import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { NotFoundError } from 'rxjs';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly productRepository: Repository<Product>; // Product 테이블

  // 제품 모든 정보를 가져오는 로직
  async getProducts(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }

  // 제품을 등록하는 로직
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = await this.productRepository.create(createProductDto);
    await this.productRepository.save(newProduct); // 저장
    return newProduct;
  }

  // 제품 아이디에 해당하는 제품을 가져오는 로직
  async getProductById(id: string): Promise<Product> {
    // const product = await this.productRepository.findOneBy({ id: id });
    const product = await this.productRepository.findOneBy({ id }); // JavaScript에서는 키와 벨류가 같으면 생략 가능
    if (!product) {
      throw new NotFoundException('Product Not Found');
    }
    return product;
  }

  // 제품을 수정하는 로직
  async updateProductById(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updateProduct = await this.productRepository.findOneBy({ id });
    if (updateProduct) {
      return updateProduct;
    }
    throw new NotFoundException('Product Not Found');
  }

  // 제품을 삭제하는 로직
  async deleteProduct(id: string): Promise<string> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundError('Product Not Found');
    }
    await this.productRepository.delete(product);
    return 'deleted';
  }
}
