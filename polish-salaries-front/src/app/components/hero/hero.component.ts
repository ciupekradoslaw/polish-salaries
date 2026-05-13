import { Component, DestroyRef, inject, output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StatsBarComponent } from '../stats-bar/stats-bar.component';

@Component({
  selector: 'app-hero',
  imports: [StatsBarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  search = output<string>();

  private destroyRef = inject(DestroyRef);
  private search$ = new Subject<string>();

  constructor() {
    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value) => {
        this.search.emit(value);
      });
  }

  onInput(value: string) {
    this.search$.next(value);
  }
}
