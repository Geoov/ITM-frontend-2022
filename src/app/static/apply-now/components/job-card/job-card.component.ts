import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetails } from 'src/app/core/models/company-details';
import { Jobs } from 'src/app/core/models/jobs';
import { CompanyService } from 'src/app/core/services/company/company.service';

@Component({
    selector: 'app-job-card',
    templateUrl: './job-card.component.html',
    styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
    @Input() currentJob: Jobs = {};
    currentCompany: CompanyDetails = {};

    constructor(private router: Router,
        private companyService: CompanyService) { }

    ngOnInit(): void {
        // if (this.currentJob.id_job) {
        //     this.companyService.getCompanyById(this.currentJob.id_job).subscribe((company: CompanyDetails) => {
        //         this.currentCompany = company;
        //     })
        // }

        if (!Object.keys(this.currentCompany).length){
            let tempCompany = {
                'id_company_details': 1,
                'id_company': 1,
                'tehnologii': 'Founding',
                'company_name': 'Google',
                'an_start': new Date(),
                'nr_angajati': 33,
                'nr_review': 31,
                'descriere': 'Some firma',
                'rating': 5,
            }
            this.currentCompany = tempCompany;
        }
    }


}
