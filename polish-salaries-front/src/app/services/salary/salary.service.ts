import { Salary, StatItem } from '../../models';
import { Observable } from 'rxjs';

export abstract class SalaryService {
  abstract getAll(): Observable<Salary[]>;
  abstract getStats(): Observable<StatItem[]>;
  abstract getBySlug(slug: string): Observable<Salary | undefined>;
  abstract getByTitle(slug: string): Observable<Salary | undefined>;
}
