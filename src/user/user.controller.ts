import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll() {
    return 'All users';
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
