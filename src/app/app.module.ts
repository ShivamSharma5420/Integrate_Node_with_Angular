import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PipesComponent } from './pipes/pipes.component'
import { CustomPipe } from './customPipe/custom.pipe';
import { ErrorsService } from './errors.service';
import { NoRouteComponent } from './no-route/no-route.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PipesComponent,
    CustomPipe,
    NoRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CustomPipe],
  providers: [{
    provide: ErrorHandler,
    useClass: ErrorsService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
