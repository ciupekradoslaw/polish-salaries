import { Component, inject, OnInit, signal } from '@angular/core';
import { SalaryService } from '../../services';
import { Salary } from '../../models';
import { MatIcon } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-salary-list',
  imports: [MatIcon, DecimalPipe],
  templateUrl: './salary-list.component.html',
  styleUrl: './salary-list.component.css'
})
export class SalaryListComponent implements OnInit {
  private readonly salaryService = inject(SalaryService);

  salaries = signal<Salary[]>([]);

  ngOnInit(): void {
    this.salaryService.getAll().subscribe((data) => this.salaries.set(data));
  }
}
