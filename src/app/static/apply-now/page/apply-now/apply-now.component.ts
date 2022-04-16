import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetails } from 'src/app/core/models/company-details';
import { Jobs } from 'src/app/core/models/jobs';
import { JobService } from 'src/app/core/services/job/job.service';

@Component({
    selector: 'app-apply-now',
    templateUrl: './apply-now.component.html',
    styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit {

    jobs: Jobs[] = [];
    currentJob = 0;

    constructor(private router: Router,
        private jobService: JobService) { }

    ngOnInit(): void {
        // this.jobService.getJobs().subscribe((jobsArray: Jobs[]) => {
        //     console.log(jobsArray);

        //     jobsArray.forEach((j: Jobs) => {
        //         this.jobs = [...this.jobs, j];
        //     })
        // })

        if (!this.jobs.length) {
            for (let i = 1; i <= 3; i++) {
                let tempJob = {
                    'id_job': i,
                    'id_company': i,
                    'payment_level': i,
                    'requested_skills': 'SQL' + i,
                    'optional_skills': 'PHP' + i,
                    'job_level': i,
                    'description': 'lorem ipsus' + i
                }

                this.jobs.push(tempJob);
            }
        }

        console.log(this.jobs.length);
    }

    callbackFunction(indexJob: number): string {
        console.log(indexJob);
        return indexJob != this.currentJob ? 'd-none' : '';
    }

    seePrevJob(): void {
        if (this.currentJob - 1 >= 0) {
            this.currentJob--;
        } else {
            this.currentJob = this.jobs.length-1;
        }
    }

    seeNextJob(): void {
        if (this.currentJob + 1 < this.jobs.length) {
            this.currentJob++;
        } else {
            this.currentJob = 0;
        }
    }


}
