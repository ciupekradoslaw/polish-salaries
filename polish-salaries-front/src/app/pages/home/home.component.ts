import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsBarComponent } from '../../components/stats-bar/stats-bar.component';
import { SalaryChipsComponent } from '../../components/salary-chips/salary-chips.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, StatsBarComponent, SalaryChipsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
