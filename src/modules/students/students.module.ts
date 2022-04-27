import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { StudentEntity } from './entities/student.entity';
import { StudentDTO } from './dto/student.dto';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([StudentEntity])],
      resolvers: [
        {
          DTOClass: StudentDTO,
          EntityClass: StudentEntity,
          CreateDTOClass: CreateStudentInput,
          UpdateDTOClass: UpdateStudentInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class StudentsModule {}
