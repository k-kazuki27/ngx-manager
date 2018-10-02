import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwt: string;

  constructor(private amplifyService: AmplifyService) { }

  getIdToken(): string {
    return this.jwt ? this.jwt : '';
  }

  setIdToken(jwt: string) {
    this.jwt = jwt;
  }

}
