import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, take } from 'rxjs';
import { UserApiService } from '../../../services/api/user/user-api.service';
import { userListMock } from '../../../services/model/user/user-mock';
import { UserListComponent } from './user-list.component';

const userApiServiceMock = {
  getUserList: jest.fn().mockReturnValue(of(userListMock)),
};

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent, RouterTestingModule],
      providers: [{ provide: UserApiService, useValue: userApiServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should call getUserList api and set userList$ with the api response', (done) => {
      component.userList$.pipe(take(1)).subscribe((list) => {
        expect(userApiServiceMock.getUserList).toHaveBeenCalled();
        expect(list).toEqual(userListMock);
        done();
      });
    });
  });
});
