import { Component, inject, OnInit, signal } from '@angular/core';
import { SalaryService } from '../../services';
import { StatItem } from '../../models';

@Component({
  selector: 'app-stats-bar',
  imports: [],
  templateUrl: './stats-bar.component.html',
  styleUrl: './stats-bar.component.css'
})
export class StatsBarComponent implements OnInit {
  private readonly salaryService = inject(SalaryService);

  stats = signal<StatItem[]>([]);

  ngOnInit(): void {
    this.salaryService.getStats().subscribe((data) => this.stats.set(data));
  }
}
