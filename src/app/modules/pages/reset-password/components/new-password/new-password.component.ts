import { UtilsService } from './../../../../../shared/services/utils.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    PasswordModule,
    DividerModule,
    ButtonModule
  ],
  templateUrl: './new-password.component.html',
  styleUrl: '../../../pages.scss'
})
export class NewPasswordComponent implements OnInit {

  formNewPassword: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private utilService: UtilsService,
  ) {}

  _utilService = this.utilService;

  value!: string;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formNewPassword = this.fb.group({
      newPassword: ['', 
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ]
    });
  }

  onSubmit() {
    console.log(this.formNewPassword.value);
  }

}
