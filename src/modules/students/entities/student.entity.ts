import { Column, Entity, ManyToMany } from 'typeorm';
import { DisciplineEntity } from '@modules/disciplines/entities/discipline.entity';
import { BaseEntity } from '@modules/bases/entities/base.entity';

@Entity()
export class StudentEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => DisciplineEntity, (disciplines) => disciplines.students, {
    nullable: true,
  })
  disciplines: DisciplineEntity[];
}
