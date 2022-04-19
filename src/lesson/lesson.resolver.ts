//* A resolver is the equivalent for a Controller in RESTful services. It handles incoming requests and then returns the response

import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

// Specify what this Resolver actually resolves => LessonType
@Resolver((of) => LessonType)
export class LessonResolver {
  //* Define queries or mutations. Queries - retrieve data / Mutations - create new data or change existing data

  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'example',
      name: 'Nests Course',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
