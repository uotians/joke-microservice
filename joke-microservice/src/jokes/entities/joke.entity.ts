import { Length } from "class-validator";
import { Category } from "src/categories/entities/category.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Joke {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string
    
    @Column()
    @Length(1, 600)
    text: string

    @Column({default: 3})
    rating: number

    @Column({default: 1.0})
    unitPrice: number

    @CreateDateColumn()
    created: Date
    
    @UpdateDateColumn()
    modified: Date

    @Column({default: 1})
    isActive: boolean

    @ManyToOne(() => Category, (category) => category.jokes)
    category: Category
}