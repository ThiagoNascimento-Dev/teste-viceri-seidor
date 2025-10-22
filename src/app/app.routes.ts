import { Routes } from '@angular/router';

// components pages
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { ResetPasswordComponent } from './modules/pages/reset-password/reset-password.component';
import { PeopleComponent } from './modules/pages/people/people.component';
import { PeopleRegistrationComponent } from './modules/pages/people-registration/people-registration.component';
import { HomeSystemComponent } from './modules/pages/home-system/home-system.component';
import { ScheduleComponent } from './modules/pages/schedule/schedule.component';
import { ActionPlanComponent } from './modules/pages/action-plan/action-plan.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'esqueci-a-senha',
        component: ResetPasswordComponent
    },
    {
        path:'home-sistema',
        component: HomeSystemComponent
    },
    {
        path:'pessoas',
        component: PeopleComponent
    },
    {
        path:'pessoas/cadastrar',
        component: PeopleRegistrationComponent
    },
    {
        path: 'agenda',
        component: ScheduleComponent
    },
    {
        path: 'plano-de-acao',
        component: ActionPlanComponent
    }
];
