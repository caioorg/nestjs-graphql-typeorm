import { BaseEntity } from '@modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class LessonEntity extends BaseEntity {
  @Column()
  description: string;
}
