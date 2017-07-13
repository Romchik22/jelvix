import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  templateUrl: './comments.component.html',
  styleUrls: ['../../app.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[];
  post: any;

  constructor(public dataService: DataService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const postId = +params['id'];
      this.dataService.getPostById(postId).subscribe(data => this.post = data );
      this.dataService.getCommentsByPostId(postId).subscribe(data => this.comments = data);
    });
  }
}
