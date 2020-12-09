import { ApiCallService } from './../../Services/api-call.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  teacherID: string = "";
  teacher ; 
  constructor(private apiService: ApiCallService, private router: ActivatedRoute) { }

  ngOnInit(): void {
   
   this.teacherID = this.router.snapshot.params['id']; 
   console.log("Tracher ID : ",this.teacherID);
   
   
    this.apiService.getTeacherProfile(this.teacherID).subscribe(t => {
      console.log("T : ",t.teacher[0]);
      
      this.teacher = t.teacher[0];
    })

  }

}
