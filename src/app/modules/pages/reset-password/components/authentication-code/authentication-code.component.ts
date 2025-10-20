import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-authentication-code',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    InputOtpModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './authentication-code.component.html',
  styleUrl: '../../../pages.scss'
})
export class AuthenticationCodeComponent implements OnInit {

  codeForm: FormGroup = new FormGroup({});

  @Output() sendCode = new EventEmitter<boolean>();

  @Output() backEmail = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.codeForm = this.fb.group({
      code: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.sendCode.emit(true);
  }

  backToEmail(){
    this.backEmail.emit(true);
  }

}
