import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [QuizModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
