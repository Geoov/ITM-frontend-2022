import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyNowComponent } from '../static/apply-now/page/apply-now/apply-now.component';
import { HomeComponent } from '../static/home/page/home/home.component';
import { LoginComponent } from '../static/login/page/login/login.component';
import { RegisterComponent } from '../static/register/page/register/register.component';
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'apply-now',
        component: ApplyNowComponent
    },
    {
        path: 'register',
        pathMatch: 'full',
        component:RegisterComponent
    },
    {
        path: 'login',
        component:LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}