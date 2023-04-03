import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you-ingate',
  templateUrl: './thank-you-ingate.component.html',
  styleUrls: ['./thank-you-ingate.component.scss']
})
export class ThankYouIngateComponent {

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigateByUrl('/')
  }
}
