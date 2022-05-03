import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { StudentDTO } from '@modules/students/dto/student.dto';
import { BaseDTO } from '@modules/bases/dto/base.dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDTO, {
  nullable: true,
})
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
