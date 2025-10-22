import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { Router } from '@angular/router';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('UtilsService', () => {
  let service: UtilsService;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UtilsService,
        {provide: Router, useValue: routerSpy}
      ],
    });
    service = TestBed.inject(UtilsService);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve chamar o método navegate do Router com a rota correta', () => {
    const rotaTeste = '/pagina/detalhe/123';
    service.navegation(rotaTeste);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([rotaTeste]);
  });

  it('Não deve chamar o navegate se a rota for nula ou vazia', () => {
    service.navegation('');
    router.navigate.calls.reset();
    service.navegation('/home');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

});
