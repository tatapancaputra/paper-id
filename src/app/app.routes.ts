import { Routes } from '@angular/router';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    title: 'User list',
  },
  {
    path: 'user/:userId',
    component: UserDetailsComponent,
    title: 'User details',
  },
];
