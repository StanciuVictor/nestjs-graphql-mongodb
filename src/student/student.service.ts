import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    // Inject the Student Repo which we name here studentRepository, of type Repository of Student
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  // Create student and save it to database
  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    // Save student to database
    return this.studentRepository.save(student);
  }
}
