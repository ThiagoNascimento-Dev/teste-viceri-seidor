import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPeopleService {

  getPeopleTable() {
    return [
      {
        id: 1,
        name: 'Pessoa 1',
        socialName: 'Pessoa 1 empresa',
        cpf: 11111111111,
        cnpj: 22222222222,
        school: 'Escola 1',
        email: 'pessoa0@teste.com',
        // fone: [{'11888886666'},{'11999996666'},],
        adrees: 'Rua 8',
        city: 'Giparaná',
        cep: 86547852,
        state: 'Minas',
        country: 'Brasil'
      },
    ]
  }

  getPeopleTableT() {
    return Promise.resolve(this.getPeopleTable());
  }

  constructor() { }
}
