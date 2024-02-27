import { Component, Input } from '@angular/core';
import { UserData } from '../../../services/model/user/user-model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() userData!: UserData;
}
