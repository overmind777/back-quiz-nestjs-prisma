import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(private prisma: DatabaseService) {}

  create(createQuizDto: CreateQuizDto) {
    const data = {
      title: createQuizDto.title,
      category: createQuizDto.category,
      owner: createQuizDto.owner,
      questions: {
        create: createQuizDto.questions.map((question) => ({
          text: question.text,
        })),
      },
    };

    return this.prisma.quiz.create({
      data: data,
      include: {
        questions: true,
      },
    });
  }

  findAll() {
    return this.prisma.quiz.findMany();
  }

  async findOne(id: number) {
    const quiz = await this.prisma.quiz.findUnique({ where: { id } });

    if (!quiz) {
      throw new HttpException('Quiz not found', 404);
    }

    return quiz;
  }

  async update(id: number, data: Prisma.QuizUpdateInput) {
    return this.prisma.quiz.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.quiz.delete({ where: { id } });
  }
}
