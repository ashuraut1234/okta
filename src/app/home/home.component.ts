import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, public authService: OktaAuthStateService,private router: Router,) {
  }
  ngOnInit(): void {
    this.authService.authState$.subscribe(x=>{
      if(x.isAuthenticated){
       //this.router.navigate(['planning']);
       this.oktaAuth.signInWithRedirect()
      }
    })
  }
  seave(){
    console.log(this.oktaAuth.getAccessToken());
  }
}
