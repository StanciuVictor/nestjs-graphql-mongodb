//* Type is a GraphQL concept and must be defined

import { Field, ID, ObjectType } from '@nestjs/graphql';

// The type will be named StudentType by default (class name). We overwrite it by specifiyng the name in the decorator => Student
@ObjectType('Student')
export class StudentType {
  //* Define class properties (fields of the Student)

  // For ID, it's a good idea to define the type explicitly
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
