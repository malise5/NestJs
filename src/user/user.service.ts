import { CreateUserDto } from './dto/createUserDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(id: string) {
    return {
      id: id,
    };
  }

  create(createUserDto: CreateUserDto) {
    return 'THe user is created ';
  }
}
