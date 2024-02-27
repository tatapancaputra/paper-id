import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { URLS } from '../urls';
import { UserApiService } from './user-api.service';

describe('UserApiService', () => {
  let service: UserApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUserList', () => {
    const url = URLS.USER.GET_USER_LIST();

    service.getUserList().subscribe();

    const testRequest = httpMock.expectOne(url);
    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.url).toEqual(url);
  });

  it('getUserDetails', () => {
    const idMock = 'id-mock';
    const url = URLS.USER.GET_USER_DETAILS(idMock);

    service.getUserDetails(idMock).subscribe();

    const testRequest = httpMock.expectOne(url);
    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.url).toEqual(url);
  });
});
