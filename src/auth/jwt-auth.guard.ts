// src/auth/jwt-auth.guard.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }

  handleRequest(err, user, info) {
    // Ви можете додати тут свою власну логіку обробки помилок або перевірку користувача
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    console.log(info);
    return user;
  }
}
