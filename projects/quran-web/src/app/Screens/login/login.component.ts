import { LangService } from './../../Services/lang.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lang:string; 
  constructor(private langService:LangService) { }

  ngOnInit(): void {
    this.lang  = this.langService.urlLang; 
  }

}
