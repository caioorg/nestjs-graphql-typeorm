import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { StudentEntity } from '@modules/students/entities/student.entity';
import { BaseEntity } from '@modules/bases/entities/base.entity';

@Entity()
export class DisciplineEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => StudentEntity, (students) => students.disciplines, {
    nullable: true,
  })
  @JoinTable()
  students: StudentEntity[];
}
