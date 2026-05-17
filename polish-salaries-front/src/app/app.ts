import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [MatCardModule, MatButtonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['pl']);
    this.translate.setFallbackLang('pl');
    this.translate.use('pl');
  }
}
