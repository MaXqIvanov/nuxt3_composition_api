import { Users } from './schemas/users.schema';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(query: any): Promise<Users[]>;
    getOne(id: any): Promise<Users>;
    createUser(createUsersDto: CreateUsersDto): Promise<Users>;
}
