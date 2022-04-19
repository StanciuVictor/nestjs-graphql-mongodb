// Type is a GraphQL concept and must be defined

import { Field, ID, ObjectType } from '@nestjs/graphql';

// The type will be named LessonType by default (class name). We overwrite it by specifiyng the name in the decorator => Lesson
@ObjectType('Lesson')
export class LessonType {
  //* Define class properties (fields of the Lesson)

  // For ID, it's a good idea to define the type explicitly
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  // String because we will use .toISOString method
  startDate: string;

  @Field()
  endDate: string;
}
