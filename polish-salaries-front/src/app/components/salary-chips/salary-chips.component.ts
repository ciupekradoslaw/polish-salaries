import { Component, inject, OnInit, signal } from '@angular/core';
import { SalaryService } from '../../services';
import { Router } from '@angular/router';
import { Salary } from '../../models';

@Component({
  selector: 'app-salary-chips',
  imports: [],
  templateUrl: './salary-chips.component.html',
  styleUrl: './salary-chips.component.css'
})
export class SalaryChipsComponent implements OnInit {
  private readonly salaryService = inject(SalaryService);
  private readonly router = inject(Router);

  chips = signal<Salary[]>([]);

  ngOnInit(): void {
    this.salaryService
      .getAll()
      .subscribe((salaries) => this.chips.set(salaries));
  }
}
