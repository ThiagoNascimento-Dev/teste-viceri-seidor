import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './email.component.html',
  styleUrl: '../../../pages.scss'
})
export class EmailComponent implements OnInit {

  emailForm: FormGroup = new FormGroup({});

  @Output() sendEmail = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.emailForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]]
    });
  }

  submitEmail() {
    this.sendEmail.emit(true);
  }

}
