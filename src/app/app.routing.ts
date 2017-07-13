import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id/posts', component: PostsComponent },
  // { path: '/posts', component: PostsComponent },
  // { path: 'post/:id/comments', component: CommentsComponent },
  // otherwise redirect to users
  { path: '**', redirectTo: 'users' },
];

export const routing = RouterModule.forRoot(appRoutes);
