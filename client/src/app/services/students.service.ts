import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../types/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
apiUrl = "https://localhost:7097/api/student";

constructor(private http:HttpClient) { }

getStudents= ():Observable<Student[]> => this.http.get<Student[]>(this.apiUrl);

getStudent= (id: number):Observable<Student> => this.http.get<Student>(this.apiUrl+'/'+id);

deleteStudent= (id: number) => this.http.delete(this.apiUrl+'/'+id);
editStudent= (id: number, data: Student) => this.http.put(this.apiUrl+'/'+id, data);

addStudents= (data: Student) => this.http.post(this.apiUrl, data);

}
