import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core.routing';
import { StaticModule } from '../static/static.module';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        HttpClientModule,
        StaticModule
    ],
    declarations: [],
})
export class CoreModule { }
