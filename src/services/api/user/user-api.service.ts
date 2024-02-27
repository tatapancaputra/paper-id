import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../../model/user/user-model';
import { URLS } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly httpClient = inject(HttpClient);

  getUserList(): Observable<UserData[]> {
    return this.httpClient.get<UserData[]>(URLS.USER.GET_USER_LIST());
  }

  getUserDetails(userId: string): Observable<UserData> {
    return this.httpClient.get<UserData>(URLS.USER.GET_USER_DETAILS(userId));
  }
}
