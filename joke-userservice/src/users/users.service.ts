import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    async handleCreateUserRequest(createUserDto: CreateUserDto): Promise<User> {
        const user = new User()
        user.username = createUserDto.username
        user.password = createUserDto.password

        if (createUserDto.isValid) user.isValid = createUserDto.isValid

        return await this.usersRepository.save(user)
    }

    async handleGetUsersRequest(): Promise<User[]> {
        return await this.usersRepository.find()
    }

    async handleGetUserRequest(id): Promise<User> {
        const user = await this.usersRepository.findOne({where: {id: id}})
        return user
    }

    async handleDeleteUserRequest(id): Promise<User> {
        const user = await this.usersRepository.findOne({where: {id: id}})
        const status = await this.usersRepository.delete(id)
        return user
    }
}

