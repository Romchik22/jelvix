import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  templateUrl: './users.component.html',
  styles: [`
    .container { margin-bottom: 10px; }
    .even { background-color: gainsboro; }
    .odd { background-color: ghostwhite; }
    `]
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(public dataService: DataService,
              public router: Router) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => { console.log(data); this.users = data; });
  }

  goToUserPosts(id) {
    console.log(id);
    this.router.navigate([`user/${id}/posts`]);
  }
}
