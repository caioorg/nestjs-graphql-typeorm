import { BaseDTO } from './../../bases/dto/base.dto';
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Content')
export class ContentDTO extends BaseDTO {
  @FilterableField()
  description: string;

  @FilterableField()
  linkContent: string;
}
