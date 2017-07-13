import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['../../app.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(public dataService: DataService,
              public router: Router) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => { this.users = data; });
  }

  goToUserPosts(id) {
    this.router.navigate([`user/${id}/posts`]);
  }
}
