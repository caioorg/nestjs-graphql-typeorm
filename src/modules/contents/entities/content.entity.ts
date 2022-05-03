import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '@modules/bases/entities/base.entity';
import { LessonEntity } from '@modules/lessons/entities/lesson.entity';

@Entity()
export class ContentEntity extends BaseEntity {
  @Column()
  description: string;

  @Column({ nullable: true })
  linkContent: string;

  @ManyToOne(() => LessonEntity)
  lesson: LessonEntity[];

  @Column({ nullable: true })
  lessonId: string;
}
