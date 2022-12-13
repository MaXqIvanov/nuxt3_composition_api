import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users, UsersDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private UsersModel: Model<UsersDocument>){

    }

    async getAll(query): Promise<Users[]>{
        if(Object.keys(query).length === 0){
          return await this.UsersModel.find()
        }else{
          return await this.UsersModel.find().where({email: query.email}).sort('asc')
        }
      }

    async getOne(id: string): Promise<Users>{
        return this.UsersModel.findById(id)
    }

    async createUser(usersDto: CreateUsersDto): Promise<Users>{
        console.log(usersDto)
        const new_user = new this.UsersModel(usersDto)
        return new_user.save()
    }
}
