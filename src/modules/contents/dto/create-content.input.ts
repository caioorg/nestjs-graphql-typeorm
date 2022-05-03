import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  linkContent?: string;
}
