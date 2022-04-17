import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetails } from 'src/app/core/models/company-details';
import { Jobs } from 'src/app/core/models/jobs';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';

@Component({
    selector: 'app-job-card',
    templateUrl: './job-card.component.html',
    styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
    @Input() currentJob: any = {};
    currentCompany: CompanyDetails = {};

    constructor(private router: Router,
        private companyService: CompanyService,
        private authService: AuthService,
        private applicationService: ApplicationService) { }

    ngOnInit(): void {
        if (this.currentJob.id_job) {
            this.fetchCompany(this.currentJob.id_job);
        }

        // if (!Object.keys(this.currentCompany).length){
        //     let tempCompany = {
        //         'id_company_details': 1,
        //         'id_company': 1,
        //         'tehnologii': 'Founding',
        //         'company_name': 'Google',
        //         'an_start': new Date(),
        //         'nr_angajati': 33,
        //         'nr_review': 31,
        //         'descriere': 'Some firma',
        //         'rating': 5,
        //     }
        //     this.currentCompany = tempCompany;
        // }
    }

    fetchCompany(idJob: number): void {
        this.companyService.getCompanyById(this.currentJob.id_job).subscribe((company: CompanyDetails) => {
            this.currentCompany = company;
        })
    }

    pressedOnLike(id_job: number): void {
        this.authService.decode().subscribe((identity: any) => {
            let id_user = identity.id_user;
            this.applicationService.submitApplication(id_job, id_user, 1).subscribe((data:any) => {
            })
        })
    }

}
