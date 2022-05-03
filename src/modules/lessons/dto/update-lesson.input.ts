import { CreateLessonInput } from './create-lesson.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
