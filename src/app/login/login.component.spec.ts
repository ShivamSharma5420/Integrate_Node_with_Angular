import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WebServiceMock } from 'src/tests/mocks/services/webService.mock';
import { WebService } from '../web.service';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule],
      providers: [FormBuilder, HttpClient, ReactiveFormsModule, RouterTestingModule, { provide: WebService, useClass: WebServiceMock }]
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

  it('should contain the default value for the login form', () => {
    expect(component.form.value).toEqual({ user_id: '', password: '' });
  });

  it('should login user if the form is valid and should navigate to the user component ', () => {
    component.form.setValue({ user_id: 'admin', password: 'admin' })
    // expect(component.form.value).toEqual({ user_id: 'admin', password: 'admin' });
    // component.clickToLogin();

    spyOn(component.route, 'navigate');

    component.clickToLogin();



    expect(component.route.navigate).toHaveBeenCalled();

  });


});
