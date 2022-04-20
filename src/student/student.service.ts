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

  // Get all students
  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // Get student by ID
  async getStudentById(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

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

  // Given the ids, return all those students
  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      //* Pute MongoDB syntax
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
