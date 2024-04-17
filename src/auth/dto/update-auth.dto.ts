import { PartialType } from '@nestjs/swagger';
import { UserDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(UserDto) {}
