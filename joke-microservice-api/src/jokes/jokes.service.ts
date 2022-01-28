import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.entity';

@Injectable()
export class JokesService {

    constructor(@Inject('JOKE_SERVICE') private readonly jokeClient: ClientProxy) {}

    async insertJoke(createJokeDto: CreateJokeDto): Promise<Joke> {
        const jokeResult$ = this.jokeClient.send({cmd: 'create_joke_request'}, createJokeDto)
        const value = await firstValueFrom(jokeResult$)
        return value
    }

    async getJokes(): Promise<Joke[]> {
        const jokeResult$ = this.jokeClient.send({cmd: 'get_jokes_request'}, new CreateJokeDto)
        const value = await firstValueFrom(jokeResult$)
        return value
    }

    async getJoke(id: string): Promise<Joke> {
        const jokeResult$ = this.jokeClient.send({cmd: 'get_joke_request'}, id)
        const value = await firstValueFrom(jokeResult$)
        return value
    }

    async deleteJoke(id: string): Promise<Joke> {
        const jokeResult$ = this.jokeClient.send({cmd: 'delete_joke_request'}, id)
        const value = await firstValueFrom(jokeResult$)
        return value
    }
}
