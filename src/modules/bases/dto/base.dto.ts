import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  createAt: Date;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  deleteAt: Date;
}
