import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aplications } from 'src/app/core/models/aplications';
import { CompanyDetails } from 'src/app/core/models/company-details';
import { Jobs } from 'src/app/core/models/jobs';
import { ApplicationService } from 'src/app/core/services/application/application.service';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';
import { JobService } from 'src/app/core/services/job/job.service';

@Component({
    selector: 'app-see-application',
    templateUrl: './see-application.component.html',
    styleUrls: ['./see-application.component.scss']
})
export class SeeApplicationComponent implements OnInit {

    applications: Aplications[] = [];
    jobs: Jobs[] = [];
    company: CompanyDetails = {};
    candidateId: number = -1;

    constructor(private router: Router,
        private applicationsService: ApplicationService,
        private authService: AuthService,
        private companyService: CompanyService,
        private jobsService: JobService) { }

    ngOnInit(): void {
        this.authService.decode().subscribe((data: any) => {
            console.log(data);
            if (data.id_user) {
                this.applicationsService.getApplicationsByCompanyId(data.id_user).subscribe((jobApplications: Aplications[]) => {
                    let jobApplicationsArray = Object.keys(jobApplications).map(key => {
                        return data[key];
                    });
                    console.log(jobApplicationsArray);
                    // jobApplicationsArray.each((jobApplication: any)  => {

                    // });
                    // jobApplications.each((jobApplication: any) => {
                    //     this.jobsService.getJobById(jobApplication.id).subscribe((tempJob: Jobs) => {
                    //         this.jobs = [...this.jobs, tempJob];
                    //     })
                    // })

                })
            }

            this.companyService.getCompanyById(data.id_user).subscribe((tempCompany: any) => {
                this.company = tempCompany;
            })
            console.log(this.jobs, this.company);


        })

    }

    goToProfile(candidateId: number): void {
        this.router.navigate(['see-candidate'], { state: { candidateId: candidateId } })
    }

}
