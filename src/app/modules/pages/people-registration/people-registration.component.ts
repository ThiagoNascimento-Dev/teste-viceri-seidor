import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../../shared/services/utils.service';
import { ModelPeople } from '../../../shared/models/people';
import { DataPeopleService } from '../../../shared/services/data-people.service';

interface School {
    name: string;
    code: string;
}
interface Country {
    name: string;
    code: string;
}

@Component({
  selector: 'app-people-registration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
  ],
  templateUrl: './people-registration.component.html',
  styleUrl: './people-registration.component.scss'
})
export class PeopleRegistrationComponent implements OnInit {

  registrationDataForm: FormGroup = new FormGroup({});
  registrationContactForm: FormGroup = new FormGroup({});
  registrationAddressForm: FormGroup = new FormGroup({});

  schools: School[] | undefined;         
  countrys: Country[] | undefined;        

  constructor(
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private dataPeopleService: DataPeopleService,
  ) {}

  _utilService = this.utilsService;

  newPerson!:ModelPeople[];

  ngOnInit() {
    
    this.schools = [
      { name: 'Escola 01', code: 'e01' },
      { name: 'Escola 02', code: 'e02' },
      { name: 'Escola 03', code: 'e03' },
      { name: 'Escola 04', code: 'e04' },
      { name: 'Escola 05', code: 'e05' }
    ];

    this.countrys = [
      { name: 'Brasil', code: 'BR' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.initializeRegistrationDataForm();
    this.initializeRegistrationAddressForm();
    this.initializeRegistrationContactForm();

    this.addFone();

  }

  initializeRegistrationDataForm() {
    this.registrationDataForm = this.fb.group({
      name: ['',[Validators.required]],
      socialName: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      school: ['', [Validators.required]]
    });
  }

  initializeRegistrationContactForm() {
    this.registrationContactForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      fone: this.fb.array([])
    });
  }

  initializeRegistrationAddressForm() {
    this.registrationAddressForm = this.fb.group({
      address:['', [Validators.required]],
      city: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  submitRegistrationData() {
    console.log(this.registrationDataForm.value);
  }

  submitRegistrationContact() {
    console.log(this.registrationContactForm.value);
  }

  submitRegistrationAddress() {
    const newData:ModelPeople = {
      id:15,
      name:this.registrationDataForm.controls['name'].value,
      cpf:this.registrationDataForm.controls['cpf'].value,
      cnpj:this.registrationDataForm.controls['cnpj'].value,
      school:this.registrationDataForm.controls['school'].value,
      email:this.registrationContactForm.controls['email'].value,
      fone:this.registrationContactForm.controls['fone'].value,
      address:this.registrationAddressForm.controls['address'].value,
      city:this.registrationAddressForm.controls['city'].value,
      cep:this.registrationAddressForm.controls['cep'].value,
      state:this.registrationAddressForm.controls['state'].value,
      country:this.registrationAddressForm.controls['country'].value
    }
    this.dataPeopleService.addPeople(newData);
    console.log('teste: ', this.dataPeopleService.getPeopleTable());
    this._utilService.navegation('/pessoas');
  }

  get fones(): FormArray {
    return this.registrationContactForm.get('fone') as FormArray
  }

  addFone() {
    this.fones.push(this.fb.control(''));
  }

  removeFone(index:number) {
    this.fones.removeAt(index);
  }

}
