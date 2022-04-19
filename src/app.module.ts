import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //* Define database connection credentials
      type: 'mongodb',
      // Opens up a mongodb connection to the url
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],
    }),
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
