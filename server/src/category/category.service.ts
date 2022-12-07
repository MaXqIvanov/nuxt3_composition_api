import { Category, CategoryDocument } from './schemas/category.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private CategoryModel: Model<CategoryDocument>){

  }
  private category = []

  async getAll(): Promise<Category[]>{
    return this.CategoryModel.find().exec()
  }
}