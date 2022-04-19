import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      //* Provide any options regarding GraphQL
      driver: ApolloDriver,
      // Tells NestJS to save the schema in memory and regenerate it every time the app is started
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
})
export class AppModule {}
