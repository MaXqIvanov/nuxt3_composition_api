import { Proods } from './schemas/proods.schema';
import { ProodsService } from './proods.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('api/proods')
export class ProodsController {
    constructor(private readonly proodsService: ProodsService){

    }

    @Get()
    getAll(@Query() query): Promise<Proods[]> {
        return this.proodsService.getAll(query)
    }
    @Get(':id')
    getOne(@Param('id') id): Promise<Proods>{
        return this.proodsService.getOne(id)
    }
}
