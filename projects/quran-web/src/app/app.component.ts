import { MessagingService } from './Services/messaging.service';
import { Component , OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuranWeb';
  message; 
  lastUsedLang: string = localStorage.getItem('lang') || 'en';
  constructor(private translate: TranslateService, private msgService:MessagingService) {

    translate.setDefaultLang(this.lastUsedLang);
  }

  ngOnInit() :void{
    this.msgService.requestPermission(); 
    this.msgService.receiveMessage(); 

    this.message = this.msgService.currentMessage; 
  }
}
