import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      {
        path: 'position/:slug',
        loadComponent: () =>
          import('./components/salary-details/salary-details.component').then(
            (m) => m.SalaryDetailsComponent
          )
      }
    ]
  },
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/admin/admin-login/admin-login.component').then(
            (m) => m.AdminLoginComponent
          )
      }
    ]
  }
];
