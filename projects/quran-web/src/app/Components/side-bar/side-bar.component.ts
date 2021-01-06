import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  adminLogOut(){
    this.auth.adminLogOut()
  }

}
