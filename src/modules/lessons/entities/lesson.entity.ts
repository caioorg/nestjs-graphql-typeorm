import { Column, Entity, OneToMany } from 'typeorm';
import { ContentEntity } from '@modules/contents/entities/content.entity';
import { BaseEntity } from '@modules/bases/entities/base.entity';
@Entity()
export class LessonEntity extends BaseEntity {
  @Column()
  description: string;

  @OneToMany(() => ContentEntity, (contents) => contents.lesson)
  contents: ContentEntity[];
}
