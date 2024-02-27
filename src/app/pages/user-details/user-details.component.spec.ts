import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, take } from 'rxjs';
import { UserApiService } from '../../../services/api/user/user-api.service';
import { userDataMock } from '../../../services/model/user/user-mock';
import { UserDetailsComponent } from './user-details.component';

const activatedRouteMock = {
  snapshot: {
    params: {
      userId: 'route-param-userId-mock',
    },
  },
};

const userApiServiceMock = {
  getUserDetails: jest.fn().mockReturnValue(of(userDataMock)),
};

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: UserApiService, useValue: userApiServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should call getUserDetails api and set userData$ with the api response', (done) => {
      component.userData$.pipe(take(1)).subscribe((data) => {
        expect(userApiServiceMock.getUserDetails).toHaveBeenCalledWith(
          activatedRouteMock.snapshot.params.userId
        );
        expect(data).toEqual(userDataMock);
        done();
      });
    });
  });
});
