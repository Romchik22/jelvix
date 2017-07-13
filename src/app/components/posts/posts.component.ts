import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['../../app.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  user: any;

  constructor(public dataService: DataService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = +params['id'];
      this.dataService.getUserById(userId).subscribe(data => this.user = data );
      this.dataService.getPostsByUserId(userId).subscribe(data => this.posts = data);
    });
  }

  goToPostComments(id) {
    this.router.navigate([`post/${id}/comments`]);
  }
}
