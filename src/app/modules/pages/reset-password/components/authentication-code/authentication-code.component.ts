import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-authentication-code',
  standalone: true,
  imports: [CommonModule, CardModule, InputOtpModule, InputTextModule, ButtonModule],
  templateUrl: './authentication-code.component.html',
  styleUrl: '../../../pages.scss'
})
export class AuthenticationCodeComponent {

  @Output() sendCode = new EventEmitter<boolean>();

  btnSendCode() {
    this.sendCode.emit(true);
  }

}
