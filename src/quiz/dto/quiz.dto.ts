import { ApiProperty } from '@nestjs/swagger';

export class Quiz {
  @ApiProperty({
    description: 'Quiz identifier',
    nullable: false,
  })
  id: number;

  @ApiProperty({
    description: 'Quiz title',
    nullable: false,
  })
  title: string;

  @ApiProperty({
    description: 'Quiz category',
    nullable: false,
  })
  category: string;

  @ApiProperty({
    description: 'Quiz owner',
    nullable: false,
  })
  owner: string;

  @ApiProperty({
    description: 'Quiz rating',
    nullable: false,
  })
  rating: number;

  @ApiProperty({
    description: 'Quiz finished',
    nullable: false,
  })
  finished: number;

  @ApiProperty({
    description: 'Quiz rating quantity',
    nullable: false,
  })
  ratingQuantity: number;

  @ApiProperty({
    description: 'Quiz age groupe',
    nullable: false,
  })
  ageGroupe: string;

  @ApiProperty({
    description: 'Quiz background color',
    nullable: false,
  })
  background: string;

  @ApiProperty({
    description: 'Quiz questions',
    nullable: false,
  })
  questions: string[];
}
