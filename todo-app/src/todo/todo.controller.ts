import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Todo } from './model/todo';
import { TodoService } from './todo.service';

@Crud({
    model: {
        type: Todo,
    },
})

@Controller('todo')
export class TodoController {
    constructor(public service: TodoService){}
}