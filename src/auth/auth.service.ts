import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/create-auth.dto';
import { DatabaseService } from '../database/database.service';
import { JwtService } from '@nestjs/jwt';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private auth: DatabaseService,
    private jwtService: JwtService,
  ) {}

  async create(createAuthDto: UserDto) {
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);

    const user = await this.auth.user.create({
      data: {
        email: createAuthDto.email,
        password: hashedPassword,
        name: createAuthDto.name,
      },
    });

    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  findAll() {
    return this.auth.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
