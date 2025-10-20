import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailComponent } from './components/email/email.component';
import { AuthenticationCodeComponent } from './components/authentication-code/authentication-code.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { ButtonModule } from 'primeng/button';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ButtonModule, EmailComponent, AuthenticationCodeComponent, NewPasswordComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: '../pages.scss'
})
export class ResetPasswordComponent {

  constructor(
    private utilService: UtilsService,
  ) {}

  _utilService = this.utilService;

  showEmail:boolean = true;
  showAuthentication: boolean = false;
  showNewPassword: boolean = false;
  
  checkEmail(status:boolean) {
    console.log(status);
    this.showEmail =! status;
    this.showAuthentication = status

  }

  checkCode(codeStatus:boolean) {
    this.showAuthentication =! codeStatus;
    this.showNewPassword = codeStatus;
  }

  resendEmail(emailStatus:boolean) {
    this.showEmail = emailStatus;
    this.showAuthentication =! emailStatus;
  }

}
