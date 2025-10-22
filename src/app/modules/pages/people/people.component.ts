import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { UtilsService } from '../../../shared/services/utils.service';
import { ModelPeople } from '../../../shared/models/people';
import { DataPeopleService } from '../../../shared/services/data-people.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ToastModule,
    InputTextModule,
  ],
  providers: [
    DataPeopleService,
    MessageService,
    ConfirmationService,
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private dataPeopleService: DataPeopleService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  peopleList: ModelPeople[]=[];
  people!:ModelPeople;
  clonedPeople: { [s: string]: ModelPeople } = {};

  _utilService = this.utilsService;

  ngOnInit() {

    this.dataPeopleService.getPeopleTableT().then((data) => {
      this.peopleList = data;
    });

    console.log('lista: ',this.dataPeopleService.getPeopleTable());

  }

  onRowEditInit(people: ModelPeople) {
    this.clonedPeople[people.id as number] = { ...people };
  }

  onRowEditSave(people: ModelPeople) {
    if (people.cpf > 0) {
        delete this.clonedPeople[people.id as number];
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Cadastro atualizado!' });
    } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'CPF invalido!' });
    }
  }

  onRowEditCancel(people: ModelPeople, index: number) {
    this.peopleList[index] = this.clonedPeople[people.id as number];
    delete this.clonedPeople[people.id as number];
  }

  deletePeople(people: ModelPeople) {
    // this.confirmationService.confirm({
    //     message: 'Are you sure you want to delete ' + people.name + '?',
    //     header: 'Confirm',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
            this.peopleList = this.peopleList.filter((val) => val.id !== people.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contato deletado com sucesso!', life: 3000 });
    //     }
    // });
  }

}
