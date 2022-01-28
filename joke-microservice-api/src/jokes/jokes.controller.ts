import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.entity';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {

    constructor(private readonly jokesService: JokesService) {}

    @Post()
    async createJoke(@Body()CreateJokeDto: CreateJokeDto): Promise<Joke> {
        return await this.jokesService.insertJoke(CreateJokeDto)
    }

    @Get()
    async getJokes(): Promise<Joke[]> {
        return await this.jokesService.getJokes()
    }

    @Get(':id')
    async getJokeById(@Param('id') id: string): Promise<Joke> {
        return await this.jokesService.getJoke(id)
    }

    @Delete(':id')
    async deleteJokeById(@Param('id') id: string): Promise<Joke> {
        return await this.jokesService.deleteJoke(id)
    }
}
