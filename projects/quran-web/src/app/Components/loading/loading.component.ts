import { LangService } from './../../Services/lang.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  storedUser:string = localStorage.getItem('quranUser');
  storedAdmin:string = localStorage.getItem('quranAdmin');

  constructor(private router:Router,private langS : LangService) { }

  ngOnInit(): void {
    this.langS.intialization() ;

    if (this.storedUser){
      setTimeout(()=>{

        this.router.navigateByUrl(this.langS.urlLang+'/home')
      },2000)
    }
    if (this.storedAdmin){
      setTimeout(()=>{

        this.router.navigateByUrl(this.langS.urlLang+'/admin')
      },2000)
    }
    else {
      setTimeout(()=>{

        this.router.navigateByUrl(this.langS.urlLang+'/login')
      },2000)
    }
  }

}
