import { Module } from '@nestjs/common';
import { ProodsService } from './proods.service';
import { ProodsController } from './proods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proods, ProodsShema } from './schemas/proods.schema';

@Module({
  providers: [ProodsService],
  controllers: [ProodsController],
  imports: [
    MongooseModule.forFeature([
        { name: Proods.name, schema: ProodsShema}
    ])
  ]
})
export class ProodsModule {}
