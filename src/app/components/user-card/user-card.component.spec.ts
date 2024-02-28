import { ComponentFixture, TestBed } from '@angular/core/testing';
import { userDataMock } from '../../../services/model/user/user-mock';
import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.userData = userDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('get addressLine1 should return street and suite of address separated by ", "', () => {
    const { street, suite } = userDataMock.address;
    const expectedResult = [street, suite].join(', ');

    expect(component.addressLine1).toBe(expectedResult);
  });

  test('get addressLine2 should return city and zipcode of address separated by ", "', () => {
    const { city, zipcode } = userDataMock.address;
    const expectedResult = [city, zipcode].join(', ');

    expect(component.addressLine2).toBe(expectedResult);
  });

  test('get pinPoint should return "https://www.google.com/maps/search/" append with lat and lng of address.geo separated by ","', () => {
    const { lat, lng } = userDataMock.address.geo;
    const expectedResult =
      'https://www.google.com/maps/search/' + [lat, lng].join(',');

    expect(component.pinPoint).toBe(expectedResult);
  });
});
