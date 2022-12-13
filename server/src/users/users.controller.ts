import { Users } from './schemas/users.schema';
import { UsersService } from './users.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService){

    }

    @Get()
    getAll(@Query() query): Promise<Users[]> {
        return this.usersService.getAll(query)
    }
    @Get(':id')
    getOne(@Param('id') id): Promise<Users>{
        return this.usersService.getOne(id)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() createUsersDto: CreateUsersDto){
        return this.usersService.createUser(createUsersDto)
    }
}
