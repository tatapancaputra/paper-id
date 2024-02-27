import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { UserApiService } from '../../../services/api/user/user-api.service';
import { UserData } from '../../../services/model/user/user-model';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@UntilDestroy()
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly userApiService = inject(UserApiService);

  userData$ = new ReplaySubject<UserData>(1);

  constructor() {
    const userId = this.route.snapshot.params['userId'];
    this.userApiService
      .getUserDetails(userId)
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.userData$.next(data);
      });
  }
}
