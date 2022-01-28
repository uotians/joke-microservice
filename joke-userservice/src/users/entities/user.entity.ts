import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    created: Date
    
    @UpdateDateColumn()
    modified: Date

    @Column({default: 1})
    isValid: boolean
}


