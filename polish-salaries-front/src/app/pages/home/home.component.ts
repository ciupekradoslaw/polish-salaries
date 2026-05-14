import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SalaryChipsComponent } from '../../components/salary-chips/salary-chips.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SalaryChipsComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
