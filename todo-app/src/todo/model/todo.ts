import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    // @IsString({ always: true })
    // @IsNotEmpty()
    taskDescription: string;
}
