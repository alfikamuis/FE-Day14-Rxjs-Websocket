import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Login } from '../models/login';


describe('AuthService', () => {
  let service: AuthService;
  var mockUsers: Login;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    mockUsers = {
      _id: '1',
      name: 'alfika',
      email: 'al@gmailcom',
      password: 'masukaja'
    };

    service = TestBed.inject(AuthService);

    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should return registered object',
    inject(
      [HttpTestingController, AuthService],
      (httpMock: HttpTestingController, authService: AuthService) => {
      
        authService.signUp(mockUsers).subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(authService.endpoint + "/register-user");

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );

  it('should return objects user by id',
    inject(
      [HttpTestingController, AuthService],
      (httpMock: HttpTestingController, authService: AuthService) => {

        authService.getUserProfile(1).subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(authService.endpoint + "/user-profile/"+1);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );

  it('should return stored token from localStorage while login',
    () => {
      localStorage.setItem('access_token', 'hasdyqwuy12r3hg');
      expect(service.getToken()).toEqual('hasdyqwuy12r3hg');
    });

  it('should return true while user still login',
    () => {
      localStorage.setItem('access_token', 'hasdyqwuy12r3hg');
      expect(service.isLoggedIn).toEqual(true);
    });

  it('should return empty token from localStorage while logout',
    () => {
      localStorage.removeItem('access_token');
      expect(service.doLogout()).toBeNull;
    });

});


