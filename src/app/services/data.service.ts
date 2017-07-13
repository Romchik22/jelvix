import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

@Injectable()
export class DataService  {

  constructor(private http: HttpService) {}

  getUsers() {
    return this.http.request('GET', '/users');
  }

  getUserById(id) {
    return this.http.request('GET', `/users/${id}`);
  }

  getPostById(id) {
    return this.http.request('GET', `/posts/${id}`);
  }

  getPostsByUserId(userId) {
    return this.http.request('GET', `/posts?userId=${userId}`);
  }

  getCommentsByPostId(postId) {
    return this.http.request('GET', `/comments?postId=${postId}`);
  }

}
