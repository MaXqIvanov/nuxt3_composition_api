import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProodsModule } from './proods/proods.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CategoryModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public')
  }),
  MongooseModule.forRoot(`mongodb+srv://web_liter:${process.env.DATABASE_PASSWORD}@cluster0.mtot7.mongodb.net/internet_store?retryWrites=true&w=majority`),
  ProodsModule,
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
