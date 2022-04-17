import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyDetails } from 'src/app/core/models/company-details';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';

@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.component.html',
    styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
    @Input() idCompany: number = -1;
    company: CompanyDetails = {};
    companyDetailsForm = new FormGroup({
        company_name: new FormControl(),
        tehnologii: new FormControl(),
        an_start: new FormControl(),
        nr_angajati: new FormControl(),
        descriere: new FormControl()
     });
    constructor(
        private route: Router,
        private companyService: CompanyService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        console.log(this.idCompany);

        if (this.idCompany !== -1) {
            this.companyService.getCompanyById(this.idCompany).subscribe((company: CompanyDetails) => {
                this.company = company;;
                console.log(this.company);
            })
        }
    }

    onSubmit(): void {

    }

}
