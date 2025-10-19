import { UtilsService } from './../../../shared/services/utils.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputOtpModule } from 'primeng/inputotp';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CardModule, ButtonModule, InputTextModule, PasswordModule, InputOtpModule, DividerModule, ],
  templateUrl: './login.component.html',
  styleUrl: '../pages.scss'
})
export class LoginComponent {
  
  constructor(
    private utilsService:UtilsService,
  ) {}

  _utilService = this.utilsService;

  value!: string;
  
}
