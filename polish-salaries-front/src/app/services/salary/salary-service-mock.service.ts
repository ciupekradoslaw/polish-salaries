import { Injectable } from '@angular/core';
import { SalaryService } from './salary.service';
import { Observable, of } from 'rxjs';
import { Salary, StatItem } from '../../models';
import { SALARY_MOCK } from '../../data/salary.mock';

@Injectable({
  providedIn: 'root'
})
export class SalaryServiceMock extends SalaryService {
  override getAll(): Observable<Salary[]> {
    return of(SALARY_MOCK);
  }

  override getStats(): Observable<StatItem[]> {
    const stats: StatItem[] = [
      { label: 'Średnia krajowa', value: '9150 zł' },
      { label: 'Płaca minimalna', value: '4806 zł' }
    ];

    return of(stats);
  }

  override getBySlug(slug: string): Observable<Salary | undefined> {
    return of(SALARY_MOCK.find((salary) => salary.slug === slug));
  }

  override getByTitle(title: string): Observable<Salary | undefined> {
    return of(SALARY_MOCK.find((salary) => salary.title === title));
  }
}
