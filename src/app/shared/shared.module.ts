import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatStepperModule,
        MatSliderModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatRadioModule,
        MatStepperModule,
        MatSliderModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule {
}
