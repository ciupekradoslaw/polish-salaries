import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalaryDetailsComponent } from './components/salary-details/salary-details.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: 'stanowisko/:slug', component: SalaryDetailsComponent }
        ]
      }
    ]
  },
  {
    path: 'admin',
    children: [{ path: 'login', component: AdminLoginComponent }]
  }
];
