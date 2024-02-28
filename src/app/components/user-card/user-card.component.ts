import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserData } from '../../../services/model/user/user-model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() userData!: UserData;

  get addressLine1(): string {
    const { street, suite } = this.userData.address;
    return [street, suite].join(', ');
  }

  get addressLine2(): string {
    const { city, zipcode } = this.userData.address;
    return [city, zipcode].join(', ');
  }

  get pinPoint(): string {
    const { lat, lng } = this.userData.address.geo;
    return 'https://www.google.com/maps/search/' + [lat, lng].join(',');
  }
}
