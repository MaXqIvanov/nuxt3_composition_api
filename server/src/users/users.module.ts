import { Users, UsersShema } from './schemas/users.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([
        { name: Users.name, schema: UsersShema}
    ])
  ]
})
export class UsersModule {}
