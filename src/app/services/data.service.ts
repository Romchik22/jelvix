import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

@Injectable()
export class DataService  {

  constructor(private http: HttpService) {
    //  super(_http);
  }

  getPosts() {
    return this.http.request('GET', '/posts');
  }

  getPostsByUserId(userId) {
    return this.http.request('GET', `/posts?userId=${userId}`);
  }

  getUsers() {
    return this.http.request('GET', '/users');
  }

  // authWithSocialNetwork(socialProfileInfo) {
  //   return this._http.request('POST', `auth/login-social`, {data: socialProfileInfo});
  // }



}
