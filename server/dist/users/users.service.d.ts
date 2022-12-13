import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users, UsersDocument } from './schemas/users.schema';
export declare class UsersService {
    private UsersModel;
    constructor(UsersModel: Model<UsersDocument>);
    getAll(query: any): Promise<Users[]>;
    getOne(id: string): Promise<Users>;
    createUser(usersDto: CreateUsersDto): Promise<Users>;
}
