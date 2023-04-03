import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  constructor(private router: Router,public authService: OktaAuthStateService,@Inject(OKTA_AUTH) public oktaAuth: OktaAuth,) {}
inGateClick() {
  this.router.navigateByUrl('/thank-ingate')
}
outGateClick() {
  this.router.navigateByUrl('/thank-outgate')
}

}
