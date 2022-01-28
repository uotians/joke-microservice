import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TestModule, 
    UsersModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
