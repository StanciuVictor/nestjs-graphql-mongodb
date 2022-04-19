//* A resolver is the equivalent for a Controller in RESTful services. It handles incoming requests and then returns the response

import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

// Specify what this Resolver actually resolves => LessonType
// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => LessonType)
export class LessonResolver {
  //* Define queries or mutations. Queries - retrieve data / Mutations - create new data or change existing data

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
