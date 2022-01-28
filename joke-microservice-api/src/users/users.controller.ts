import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body()CreateUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.insertUser(CreateUserDto)
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.usersService.getUsers()
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return await this.usersService.getUser(id)
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: string): Promise<User> {
        return await this.usersService.deleteUser(id)
    }
}
