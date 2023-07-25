import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entitie";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column({type: "varchar", length: 100})
    name: string
    @Column({type: "varchar", length: 45, unique: true})
    email: string
    @Column({ type: "varchar", length: 11})
    phone: string;
    @CreateDateColumn ({type:"date"})
    createdAt: Date | string

    @ManyToOne(() => User)
    user: User;
}

export default Contact ;