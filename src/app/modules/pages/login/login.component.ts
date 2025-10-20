import { UtilsService } from './../../../shared/services/utils.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputOtpModule } from 'primeng/inputotp';
import { NgxCaptchaModule } from 'ngx-captcha';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    InputOtpModule,
    DividerModule,
    NgxCaptchaModule
    
  ],
  templateUrl: './login.component.html',
  styleUrl: '../pages.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb: FormBuilder,
    private utilsService:UtilsService,
  ) {}

  _utilService = this.utilsService;

  value!: string;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]
    ],
      recaptcha: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
  
}
