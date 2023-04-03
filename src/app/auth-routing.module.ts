import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import {PlanningComponent} from './planning/planning.component';
import {ThankYouIngateComponent} from './thank-you-ingate/thank-you-ingate.component';
import {ThankYouOutgateComponent} from './thank-you-outgate/thank-you-outgate.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const oktaConfig = {
  issuer: 'https://dev-44583738.okta.com/oauth2/default',
  clientId: '0oa8c95q4147zZjTf5d7',
  redirectUri: '/login/callback',
  scopes: ['openid', 'profile']
};

const oktaAuth = new OktaAuth(oktaConfig);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: HomeComponent
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    canActivate:[OktaAuthGuard],
    path: 'planning',
    component: PlanningComponent
  },
  {
    canActivate:[OktaAuthGuard],
    path: 'thank-ingate',
    component: ThankYouIngateComponent
  },
  {
    canActivate:[OktaAuthGuard],
    path: 'thank-outgate',
    component: ThankYouOutgateComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    PlanningComponent,
    ThankYouIngateComponent,
    ThankYouOutgateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OktaAuthModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
