//* A resolver is the equivalent for a Controller in RESTful services. It handles incoming requests and then returns the response

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // Returns an array of Students
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
