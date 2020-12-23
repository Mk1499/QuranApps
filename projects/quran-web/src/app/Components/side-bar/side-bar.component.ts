import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

 activePage:string = 'dashboard';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  changeActive(name){
    this.activePage = name;
  }

  adminLogOut(){
    this.auth.adminLogOut()
  }

}
