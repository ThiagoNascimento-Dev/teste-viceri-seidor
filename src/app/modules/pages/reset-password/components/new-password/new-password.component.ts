import { UtilsService } from './../../../../../shared/services/utils.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule, PasswordModule, DividerModule, ButtonModule],
  templateUrl: './new-password.component.html',
  styleUrl: '../../../pages.scss'
})
export class NewPasswordComponent {

  constructor(
    private utilService: UtilsService,
  ) {}

  _utilService = this.utilService;

  value!: string;

}
