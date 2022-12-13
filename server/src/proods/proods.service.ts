import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proods, ProodsDocument } from './schemas/proods.schema';

@Injectable()
export class ProodsService {
    constructor(@InjectModel(Proods.name) private ProodsModel: Model<ProodsDocument>){

    }
  
    async getAll(query): Promise<Proods[]>{
      if(Object.keys(query).length === 0){
        return await this.ProodsModel.find()
      }else{
        return await this.ProodsModel.find().where({id_category: query.id_category})
      }
    }

    async getOne(id: string): Promise<Proods>{
        return this.ProodsModel.findById(id)
    }
}
