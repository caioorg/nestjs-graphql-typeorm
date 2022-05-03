import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { LessonDTO } from '@modules/lessons/dto/lesson.dto';
import { BaseDTO } from '@modules/bases/dto/base.dto';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO)
export class ContentDTO extends BaseDTO {
  @FilterableField()
  description: string;

  @FilterableField({ nullable: true })
  linkContent: string;
}
