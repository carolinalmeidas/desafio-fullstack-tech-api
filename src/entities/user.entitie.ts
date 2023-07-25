import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcryptjs";
import Contact from "./contact.entities";


@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column({type: "varchar", length: 100})
    name: string
    @Column({type: "varchar", length: 45, unique: true})
    email: string
    @Column({type: "varchar", length: 120})
    password: string
    @Column({ type: "varchar", length: 11})
    phone: string;
    @CreateDateColumn ({type:"date"})
    createdAt: Date | string

    @BeforeInsert()
    async hashPassword() {
        this.password = hashSync(this.password, 8);
    }
    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[];

}

export default User ;