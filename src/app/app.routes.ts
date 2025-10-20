import { Routes } from '@angular/router';

// components pages
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { ResetPasswordComponent } from './modules/pages/reset-password/reset-password.component';

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
    }
];
