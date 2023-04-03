import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you-outgate',
  templateUrl: './thank-you-outgate.component.html',
  styleUrls: ['./thank-you-outgate.component.scss']
})
export class ThankYouOutgateComponent {
  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigateByUrl('/')
  }
}
