import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule],
  templateUrl: './email.component.html',
  styleUrl: '../../../pages.scss'
})
export class EmailComponent {

  @Output() sendEmail = new EventEmitter<boolean>();

  btnSendEmail() {
    this.sendEmail.emit(true);
  }

}
