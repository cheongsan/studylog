import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // product get all
  @Get('/all')
  async getAllProducts(): Promise<Product[]> {
    // 제품 테이블의 정보를 가져오는 로직
    const products = await this.productService.getProducts();
    return products;
  }

  // 제품 등록
  @Post('/new')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    // @Body("name"): "string",
    // @Body("price"): "number",
    // @Body("description"): "string",
    // @Body("imageUrl"): "string",
  ): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  // 제품 상세 정보 불러오기
  @Get('/:id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return await this.productService.getProductById(id);
  }

  // 제품 수정
  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<void> {
    await this.productService.updateProductById(id, updateProductDto);
  }

  // 제품 삭제
  @Delete('/:id')
  async deleteProduct(@Param('id') id: string): Promise<string> {
    return await this.productService.deleteProduct(id);
  }
}
