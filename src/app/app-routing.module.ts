import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoRouteComponent } from './no-route/no-route.component';
import { PipesComponent } from './pipes/pipes.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent/*, children: []*/ },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "pipes", component: PipesComponent },
  { path: "error", component: NoRouteComponent },
  { path: "**", redirectTo: "error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
