import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.entity';

@Injectable()
export class JokesService {

    constructor(@InjectRepository(Joke) private jokesRepository: Repository<Joke>) {}

    async handleCreateJokeRequest(createJokeDto: CreateJokeDto): Promise<Joke> {
        const joke = new Joke()
        joke.name = createJokeDto.name
        joke.text = createJokeDto.text
        joke.rating = createJokeDto.rating
        joke.unitPrice = createJokeDto.unitPrice

        if (createJokeDto.isActive) joke.isActive = createJokeDto.isActive

        return await this.jokesRepository.save(joke)
    }

    async handleGetJokesRequest(): Promise<Joke[]> {
        return await this.jokesRepository.find()
    }

    async handleGetJokeRequest(id): Promise<Joke> {
        const joke = await this.jokesRepository.findOne({where: {id: id}})
        return joke
    }

    async handleDeleteJokeRequest(id): Promise<Joke> {
        const joke = await this.jokesRepository.findOne({where: {id: id}})
        const status = await this.jokesRepository.delete(id)
        return joke
    }
}
