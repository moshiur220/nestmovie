import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mos:QaYWtr0aoW0534t4@cluster0.xafrv.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
