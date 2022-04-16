import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from  '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        MatCardModule,
        MatFormFieldModule,
        HeaderComponent,
  ],
  providers: [
   
  ]
})
export class SharedModule {
}