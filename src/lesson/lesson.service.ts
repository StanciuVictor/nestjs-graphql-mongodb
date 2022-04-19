import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';

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

  // Create lesson and save it to the database
  async createLesson(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    // Save the lesson to the db
    return this.lessonRepository.save(lesson);
  }
}
