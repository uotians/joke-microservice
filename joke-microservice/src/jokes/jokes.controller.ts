import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.entity';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {

    constructor(private jokesService: JokesService) {}

    @MessagePattern({cmd: 'create_joke_request'})
    async createJoke(data: CreateJokeDto): Promise<Joke> {
        return await this.jokesService.handleCreateJokeRequest(data)
    }

    @MessagePattern({cmd: 'get_jokes_request'})
    async getJokes(): Promise<Joke[]> {
        return await this.jokesService.handleGetJokesRequest()
    } 

    @MessagePattern({cmd: 'get_joke_request'})
    async getJoke(id): Promise<Joke> {
        return await this.jokesService.handleGetJokeRequest(id)
    }

    @MessagePattern({cmd: 'delete_joke_request'})
    async deleteJoke(id): Promise<Joke> {
        return await this.jokesService.handleDeleteJokeRequest(id)
    }
}
