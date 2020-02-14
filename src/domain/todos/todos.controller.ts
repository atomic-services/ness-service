import { Controller, Post, Body } from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';

@Controller('todos')
export class TodosController {
  @Post()
  createPost(@Body() createTodo: CreateTodoDto) {
    return createTodo;
  }
}
