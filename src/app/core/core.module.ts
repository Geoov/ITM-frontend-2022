import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core.routing';
import { StaticModule } from '../static/static.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        HttpClientModule,
        StaticModule,
        SharedModule
    ],
    declarations: [],
})
export class CoreModule { }
