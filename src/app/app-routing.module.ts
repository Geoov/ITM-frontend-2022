import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./core/core.module').then((x) => x.CoreModule),
      },
      {path: '**',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
    providers: [
      { provide: LocationStrategy, useClass: PathLocationStrategy },
      { provide: APP_BASE_HREF, useValue: '/' },
    ],
})
export class AppRoutingModule { }
