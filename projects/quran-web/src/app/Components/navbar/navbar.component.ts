import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active:string; 

  constructor(private router:Router) {}
  
  ngOnInit(): void {
    this.active =  this.router.url.substring(1); 
  }

  changeActive(active){
    this.active = active ; 
  }

}
