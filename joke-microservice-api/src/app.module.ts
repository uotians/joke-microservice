import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { CategoriesModule } from './categories/categories.module';
import { JokesModule } from './jokes/jokes.module';
import { UsersModule } from './users/users.module';
import clientConfig from './client-config'

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'JOKE_SERVICE',
        transport: Transport.TCP,
        options: {
          host: clientConfig.microserviceOptions.host,
          port: clientConfig.microserviceOptions.port
        }
      },
      {
        name: 'JOKE_USERSERVICE',
        transport: Transport.TCP,
        options: {
          host: clientConfig.userserviceOptions.host,
          port: clientConfig.userserviceOptions.port
        }
      },
      {
        name: 'JOKE_LOGSERVICE',
        transport: Transport.TCP,
        options: {
          host: clientConfig.logserviceOptions.host,
          port: clientConfig.logserviceOptions.port
        }
      }
    ]),
    TestModule,
    CategoriesModule,
    JokesModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ClientsModule]
})
export class AppModule { }
