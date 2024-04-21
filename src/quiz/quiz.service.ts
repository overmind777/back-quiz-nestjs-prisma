import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';
import { QuestionCreateInput } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(private prisma: DatabaseService) {}

  async create(createQuizDto: Prisma.QuizCreateInput) {
    try {
      const data: Prisma.QuizCreateInput = {
        title: createQuizDto.title,
        category: createQuizDto.category,
        owner: createQuizDto.owner,
        ageGroup: createQuizDto.ageGroup,
        background: createQuizDto.background,
        questions: {
          create: (createQuizDto.questions as QuestionCreateInput[]).map(
            (question) => ({
              text: question.text,
            }),
          ),
        },
      };

      return await this.prisma.quiz.create({
        data: data,
        include: {
          questions: true,
        },
      });
    } catch (err) {
      throw new Error(`Error creating quiz: ${err.message}`);
    }
  }

  findAll() {
    return this.prisma.quiz.findMany({
      include: {
        questions: true,
      },
    });
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
