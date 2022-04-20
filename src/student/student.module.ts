import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentResolver, StudentService],
  // Allows us to export a provider within the module, so that any other module that imports this module, can inject this
  // Makes StudentService injectabla in any other module that imports this module
  exports: [StudentService],
})
export class StudentModule {}
