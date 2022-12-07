import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProodsController } from './proods/proods.controller';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CategoryModule, ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb+srv://web_liter:Footbolist123@cluster0.mtot7.mongodb.net/internet_store?retryWrites=true&w=majority`)],
  controllers: [AppController, ProodsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
