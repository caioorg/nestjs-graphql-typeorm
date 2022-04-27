import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  key: string;
}
