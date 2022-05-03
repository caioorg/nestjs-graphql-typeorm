import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateDisciplineInput } from './create-discipline.input';

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  @Field(() => ID, { nullable: true })
  id?: number;
}
