import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Prisma } from '@prisma/client';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Quiz } from './dto/quiz.dto';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @ApiOperation({ summary: 'Create quiz' })
  @ApiBody({ type: CreateQuizDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    isArray: true,
    type: Quiz,
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createQuizDto: Prisma.QuizCreateInput) {
    return this.quizService.create(createQuizDto);
  }

  @ApiOperation({ summary: 'Return all quiz' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    isArray: true,
    type: Quiz,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @ApiOperation({ summary: 'Return quiz by id' })
  @ApiResponse({
    status: HttpStatus.FOUND,
    description: 'Success',
    isArray: true,
    type: Quiz,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.findOne(id);
  }

  @ApiOperation({ summary: 'Return quiz by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    isArray: true,
    type: Quiz,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQuizDto: Prisma.QuizUpdateInput,
  ) {
    return this.quizService.update(id, updateQuizDto);
  }

  @ApiOperation({ summary: 'Delete quiz by id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Success',
    isArray: true,
    type: Quiz,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.remove(id);
  }
}
