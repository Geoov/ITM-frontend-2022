import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/page/home/home.component';
import { HeaderPresentationComponent } from './home/components/header-presentation/header-presentation.component';
import { PartnersComponent } from './home/components/partners/partners.component';
import { AdvantagesComponent } from './home/components/advantages/advantages.component';
import { ApplyNowComponent } from './apply-now/page/apply-now/apply-now.component';
import { JobCardComponent } from './apply-now/components/job-card/job-card.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        HeaderPresentationComponent,
        PartnersComponent,
        AdvantagesComponent,
        ApplyNowComponent,
        JobCardComponent
    ]
})
export class StaticModule {
}
