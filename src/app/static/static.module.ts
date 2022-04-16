import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/page/home/home.component';
import { HeaderPresentationComponent } from './home/components/header-presentation/header-presentation.component';
import { PartnersComponent } from './home/components/partners/partners.component';
import { AdvantagesComponent } from './home/components/advantages/advantages.component';

@NgModule({
  imports: [
      CommonModule,
      SharedModule
],
  declarations: [
    HomeComponent,
    HeaderPresentationComponent,
    PartnersComponent,
    AdvantagesComponent
  ]
})
export class StaticModule {
}
