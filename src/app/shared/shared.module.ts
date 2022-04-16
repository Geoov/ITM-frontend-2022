import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from  '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [
        HeaderComponent,
         FooterComponent
  ]
})
export class SharedModule {
}
