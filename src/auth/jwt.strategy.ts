import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

interface JwtPayload {
  sub: number;
  username: string;
  role: 'admin' | 'user';
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'tu-secreto-jwt',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUserById(payload.sub);

    if (!user) {
      throw new UnauthorizedException('Usuario no válido');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Usuario deshabilitado');
    }
    return {
      id: user.id,
      username: user.username,
      role: user.role,
    };
  }
}
