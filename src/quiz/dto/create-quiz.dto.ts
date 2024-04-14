import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class QuestionCreateInput {
  @IsString()
  @IsNotEmpty()
  text: string;
}

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  owner: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionCreateInput)
  questions?: QuestionCreateInput[];
}
