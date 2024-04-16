import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [QuizModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
