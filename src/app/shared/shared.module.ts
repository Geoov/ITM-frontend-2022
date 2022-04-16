import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from  '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule
    ],
    declarations: [
    ]
})
export class SharedModule {
}
