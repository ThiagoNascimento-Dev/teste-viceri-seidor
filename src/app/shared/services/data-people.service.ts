import { Injectable } from '@angular/core';
import { ModelPeople } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class DataPeopleService {

  peopleList: ModelPeople[] = [
    {
        id: 1,
        name: 'Pessoa 1',
        socialName: 'Pessoa 1 empresa',
        cpf: 11111111111,
        cnpj: 22222222222,
        school: 'Escola 1',
        email: 'pessoa0@teste.com',
        fone: ['11888886666','11999996666',],
        address: 'Rua 8',
        city: 'Giparaná',
        cep: 86547852,
        state: 'Minas',
        country: 'Brasil'
      },
  ];

  getPeopleTable():ModelPeople[] {
    return this.peopleList;
  }

  getPeopleTableT(): Promise<ModelPeople[]> {
    return Promise.resolve(this.getPeopleTable());
  }

  addPeople(newP:ModelPeople) {
    this.peopleList.push(newP);
  }

  constructor() { }
}
