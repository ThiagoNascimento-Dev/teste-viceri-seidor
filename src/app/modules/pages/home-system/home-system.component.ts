import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { DataPeopleService } from '../../../shared/services/data-people.service';

@Component({
  selector: 'app-home-system',
  standalone: true,
  imports: [
    CardModule,
  ],
  templateUrl: './home-system.component.html',
  styleUrl: './home-system.component.scss'
})
export class HomeSystemComponent {

  constructor(
    private dataService: DataPeopleService,
  ) {}

  _dataService = this.dataService;

}
