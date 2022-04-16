import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.component.html',
    styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
    @Input() idCompany: number = -1;
    constructor() { }

    ngOnInit(): void {
    }

}
