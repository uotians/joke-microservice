import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
    
    constructor(@Inject('JOKE_USERSERVICE') private readonly userClient: ClientProxy) {}

    async insertUser(createUserDto: CreateUserDto): Promise<User> {
        const userResult$ = this.userClient.send({cmd: 'create_user_request'}, createUserDto)
        const value = await firstValueFrom(userResult$)
        return value
    }

    async getUsers(): Promise<User[]> {
        const userResult$ = this.userClient.send({cmd: 'get_users_request'}, new CreateUserDto)
        const value = await firstValueFrom(userResult$)
        return value
    }

    async getUser(id: string): Promise<User> {
        const userResult$ = this.userClient.send({cmd: 'get_user_request'}, id)
        const value = await firstValueFrom(userResult$)
        return value
    }

    async deleteUser(id: string): Promise<User> {
        const userResult$ = this.userClient.send({cmd: 'delete_user_request'}, id)
        const value = await firstValueFrom(userResult$)
        return value
    }
}
