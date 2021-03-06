import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    // Inject the Lesson Repo which we name here lessonRepository, of type Repository of Lesson
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  // Get lesson
  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  // Get all lessons
  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  // Create lesson and save it to the database
  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });

    // Save the lesson to the db
    return this.lessonRepository.save(lesson);
  }

  // Enroll students to a lesson
  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    // Keep already enrolled students and enroll new students
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }
}
