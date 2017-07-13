import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  templateUrl: './posts.component.html',
  styles: [`
    .container { margin-bottom: 10px; }
    .even { background-color: gainsboro; }
    .odd { background-color: ghostwhite; }
  `]
})
export class PostsComponent implements OnInit {
  posts: any[]
  constructor(public dataService: DataService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = +params['id'];
      this.getPostsByUserId(userId).subscribe(data => { console.log(data); this.posts = data; });
    });
  }

  getPostsByUserId(userId) {
    return this.dataService.getPostsByUserId(userId);
  }
  goToUserPosts(id) {
    console.log(id);
    this.router.navigate([`user/${id}/posts`]);
  }
}
