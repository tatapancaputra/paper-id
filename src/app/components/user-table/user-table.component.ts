import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserData } from '../../../services/model/user/user-model';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {
  @Input() userList!: UserData[];
}
