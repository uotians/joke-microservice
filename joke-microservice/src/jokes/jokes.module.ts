import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './entities/joke.entity';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Joke])],
  controllers: [JokesController],
  providers: [JokesService]
})
export class JokesModule {}
