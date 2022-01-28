import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @MessagePattern({cmd: 'create_user_request'})
    async createUser(data: CreateUserDto): Promise<User> {
        return await this.usersService.handleCreateUserRequest(data)
    }

    @MessagePattern({cmd: 'get_users_request'})
    async getUsers(): Promise<User[]> {
        return await this.usersService.handleGetUsersRequest()
    }

    @MessagePattern({cmd: 'get_user_request'})
    async getUser(id): Promise<User> {
        return await this.usersService.handleGetUserRequest(id)
    }

    @MessagePattern({cmd: 'delete_user_request'})
    async deleteUser(id): Promise<User> {
        return await this.usersService.handleDeleteUserRequest(id)
    }
}
