import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { SalaryChipsComponent } from '../../components/salary-chips/salary-chips.component';

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, RouterOutlet, HeroComponent, SalaryChipsComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {}
