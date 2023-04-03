import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "af9c20f5-ad69-45a6-85a9-7ae471d4b093",
    });
  }
}
