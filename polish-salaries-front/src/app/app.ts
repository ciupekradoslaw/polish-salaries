import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('polish-salaries-front');
}
