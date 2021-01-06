import { ApiCallService } from './../../Services/api-call.service';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  loading: boolean = true;
  sub: Subscription;
  constructor(private auth: AuthService, private api: ApiCallService) { }

  ngOnInit(): void {
    this.user = this.auth.user;
    this.getStudentData()
  }

  getStudentData() {
    this.sub = this.api.getStudentProfile(this.auth.user._id).subscribe(data => {
      console.log("US : ", data);

      this.user = data;
      this.loading = false;
      this.auth.setActiveUser(this.user)
    })
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe()
  // }

}
