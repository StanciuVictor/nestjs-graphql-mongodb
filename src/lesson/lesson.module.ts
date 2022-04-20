import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from '../student/student.module';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  // Import TypeORMModule to allow us to inject the Repo for our lessons ?
  imports: [
    TypeOrmModule.forFeature([Lesson]),
    // Import Module to have acces to StudentService
    StudentModule,
  ],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
