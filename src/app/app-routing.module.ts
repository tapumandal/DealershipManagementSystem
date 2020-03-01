import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './controller/business/dashboard/dashboard.component';
import { HeaderComponent } from './controller/header/header.component';
import { LoginComponent } from './user_management/login/login.component';
import { RegistrationComponent } from './user_management/registration/registration.component';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registration", component: RegistrationComponent, pathMatch: "full" },
  {
    path: ":business-name", component: HeaderComponent, 
    children: [
      { path: "dashboard", component: DashboardComponent  }
    ]
  },
  // {path: ":business-name/dashboard", component: DashboardComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
