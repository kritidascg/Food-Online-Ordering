import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'; 
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

describe('LoginService', () => {
  let loginService: LoginService;
  let http:HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    loginService = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  //for no pending calls after each testcase
  afterEach(() => {
    httpController.verify();
  });

  it('call login()', () => {
    const testData = true; 
    const inputData = {
      username: 'admin',
      password: 'admin',
    };
    loginService
      .postLogin(inputData);
       });

  it('should be created', () => {
    expect(loginService).toBeDefined();
  });

  it('call login() failed', () => {
    const emsg = 'status 500 error';
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

      
  });
});

