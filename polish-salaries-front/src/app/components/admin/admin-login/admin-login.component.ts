import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [
    MatIcon,
    TranslatePipe,
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    FormField,
    MatButton,
    MatDivider,
    RouterLink
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  loginModel = signal({
    login: '',
    password: ''
  });

  loginForm = form(this.loginModel, (login) => {
    required(login.login);
    required(login.password);
  });

  async onSubmit() {
    await submit(this.loginForm, async (form) => {
      return undefined;
    });
  }
}
