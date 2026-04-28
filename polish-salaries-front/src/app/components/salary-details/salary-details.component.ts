import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaryService } from '../../services';
import { Salary } from '../../models';

@Component({
  selector: 'app-salary-details',
  imports: [],
  templateUrl: './salary-details.component.html',
  styleUrl: './salary-details.component.css'
})
export class SalaryDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private salaryService = inject(SalaryService);

  salary = signal<Salary | null>(null);
  relatedJobs = signal<Salary[]>([]);
  notFound = signal(false);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.salaryService.getBySlug(slug).subscribe((data) => {
        if (!data) {
          this.notFound.set(true);
          return;
        }
        this.salary.set(data);
        // todo load related
      });
    });
  }
}
