import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { Module } from "@nestjs/common";
import { Category, CategoryShema } from './schemas/category.schema';

@Module({
    providers: [CategoryService],
    controllers: [CategoryController],
    imports: [
        MongooseModule.forFeature([
            { name: Category.name, schema: CategoryShema}
        ])
    ]
})

export class CategoryModule{    

}