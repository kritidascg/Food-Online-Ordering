import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/security/auth.service';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = { navigate: jasmine.createSpy('org') }
  const authServiceSpy = jasmine.createSpyObj(AuthService, ['onLogin', 'IsLoggedIn']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, AppComponent, HomeComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule],
      providers: [{ provide: Router, useValue: routerSpy },

        { provide: AuthService, useValue: authServiceSpy } ]

    })
    .compileComponents();
  });
    
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onLogin() method', async() => {
    const response: LoginComponent[] = [];
    authServiceSpy.onLogin.and.returnValue(of(response));
    component.ngOnInit();

  }
  );

  it('Check login button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#login');
    btn.click();
    fixture.detectChanges();

  });

  it('should have Login in "Login Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#login');
    expect(btn.innerHTML).toBe('Login');
  });
});
