import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@modules/bases/entities/base.entity';

@Entity()
export class ContentEntity extends BaseEntity {
  @Column()
  description: string;

  @Column()
  linkContent: string;
}
