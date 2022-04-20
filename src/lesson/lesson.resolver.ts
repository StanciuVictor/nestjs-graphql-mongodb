//* A resolver is the equivalent for a Controller in RESTful services. It handles incoming requests and then returns the response

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

// Specify what this Resolver actually resolves => LessonType
// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  //* Define queries or mutations. Queries - retrieve data / Mutations - create new data or change existing data

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  // Returns an array of Lessons
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => LessonType)
  createLesson(
    // Retrieve arguments to create the lesson
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLesson: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLesson;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
