import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  @IsUUID()
  lessonId: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [ID])
  // Because it's an array -> specify version (4) and specify that each item in array must be uuid
  @IsUUID('4', { each: true })
  studentIds: string[];
}
