import { DynamicMeta } from './Services/dynamicMeta.service';
import { MessagingService } from './Services/messaging.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MobileNoteService } from './Services/notifications.service';
import { DeviceDetectorService } from 'ngx-device-detector';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuranWeb';
  message;
  lastUsedLang: string = localStorage.getItem('lang') || 'en';
  constructor(private translate: TranslateService, private msgService: MessagingService,
    private deviceService: DeviceDetectorService,
    private dynamicMeta: DynamicMeta,
    private mobileNoteService: MobileNoteService
  ) {

    translate.setDefaultLang(this.lastUsedLang);
  }

  ngOnInit(): void {
    if (this.deviceService.isMobile()) {
      this.mobileNoteService.requestPermission();
      this.mobileNoteService.notificationListeners();
    } else {
      this.msgService.requestPermission();
      this.msgService.receiveMessage();
    }


    this.message = this.msgService.currentMessage;
  }
}
