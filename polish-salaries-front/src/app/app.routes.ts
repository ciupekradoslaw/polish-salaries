import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalaryDetailsComponent } from './components/salary-details/salary-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'stanowisko/:slug', component: SalaryDetailsComponent }]
  }
];
