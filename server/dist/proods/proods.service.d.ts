import { Model } from 'mongoose';
import { Proods, ProodsDocument } from './schemas/proods.schema';
export declare class ProodsService {
    private ProodsModel;
    constructor(ProodsModel: Model<ProodsDocument>);
    getAll(query: any): Promise<Proods[]>;
    getOne(id: string): Promise<Proods>;
}
