import { ApiCallService } from './../../Services/api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers:any = [];

  constructor(private apiService:ApiCallService) { }

  ngOnInit(): void {
    
    this.teachers = this.apiService.getTeachers().subscribe(t => {
      this.teachers = t.teachers; 
    });
    
 
  }

}
