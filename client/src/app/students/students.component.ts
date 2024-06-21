import { Component, inject, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Observable } from 'rxjs';
import { Student } from '../types/student';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  selector: 'app-students',
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students$!: Observable<Student[]>;
  constructor() {}

  studentService = inject(StudentsService);
  toastService = inject(ToastrService);

  ngOnInit() {
    this.getStudents();
  }

  delete(id: number) {
    this.studentService.deleteStudent(id).subscribe({
      next: (response) => {
        this.getStudents();
        this.toastService.success('Successfuly Deleted');
      },
      error: err => {
        console.log(err);
        this.toastService.success('Successfuly Deleted');
      }
    });
  }

  private getStudents(): void {
    this.students$ = this.studentService.getStudents();
  }
}
