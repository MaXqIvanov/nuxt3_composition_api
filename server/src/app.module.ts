import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { ProductsModule } from './category/category.module';
import { ProodsController } from './proods/proods.controller';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb+srv://web_liter:Footbolist123@cluster0.mtot7.mongodb.net/internet_store?retryWrites=true&w=majority`)],
  controllers: [AppController, ProodsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
