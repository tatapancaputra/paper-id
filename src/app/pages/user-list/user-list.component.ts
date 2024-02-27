import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { UserApiService } from '../../../services/api/user/user-api.service';
import { UserData } from '../../../services/model/user/user-model';
import { UserTableComponent } from '../../components/user-table/user-table.component';

@UntilDestroy()
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserTableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  private readonly userApiService = inject(UserApiService);

  userList$ = new ReplaySubject<UserData[]>(1);

  constructor() {
    this.userApiService
      .getUserList()
      .pipe(untilDestroyed(this))
      .subscribe((list) => {
        this.userList$.next(list);
      });
  }
}
