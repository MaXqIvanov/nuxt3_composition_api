import { Proods } from './schemas/proods.schema';
import { ProodsService } from './proods.service';
export declare class ProodsController {
    private readonly proodsService;
    constructor(proodsService: ProodsService);
    getAll(query: any): Promise<Proods[]>;
    getOne(id: any): Promise<Proods>;
}
