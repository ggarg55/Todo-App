import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Todo } from './model/todo';

export class TodoService extends TypeOrmCrudService<Todo> {
    constructor(@InjectRepository(Todo) repo) {
        super(repo);
    }
}