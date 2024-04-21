import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class QuestionCreateInput {
  @IsObject()
  @IsNotEmpty()
  text: string;
}

export class CreateQuizDto {
  @ApiProperty({
    description: 'Quiz name',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Quiz category',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'Quiz questions',
    nullable: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionCreateInput)
  questions: QuestionCreateInput[];

  @ApiProperty({
    description: 'Quiz owner',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  owner: string;

  @ApiProperty({
    description: 'Quiz age group',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  ageGroup: string;

  @ApiProperty({
    description: 'Quiz background color',
    nullable: false,
  })
  @IsString()
  background: string;
}
