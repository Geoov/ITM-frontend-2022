import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetails } from 'src/app/core/models/company-details';
import { Jobs } from 'src/app/core/models/jobs';
import { JobService } from 'src/app/core/services/job/job.service';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
    selector: 'app-apply-now',
    templateUrl: './apply-now.component.html',
    styleUrls: ['./apply-now.component.scss'],
    animations: [
        trigger('dimBox', [
            state('notDimmed',
                style({ opacity: 0.5 })
            ),
            state('dimmed',
                style({ transform: 'translateY(100%)', opacity: 0.8 })
            ),

            transition('notDimmed => dimmed', [
                animate('0.5s')
            ]),
            transition('dimmed => notDimmed', [
                animate('1s')
            ])
        ]),
        trigger('finishDimBox', [
            state('finished-dimmed',
                style({ transform: 'translateY(-100%)', opacity: 0.8 })
            ),
            state('notDimmed',
                style({ opacity: 0.5 })
            ),
        ])
    ]
})
export class ApplyNowComponent implements OnInit {

    // jobs: (Jobs & {procent: number})[] = [];
    jobs: any[] = [];
    currentJob = 0;
    changeState = false;
    finishedDimmed = false;

    constructor(private router: Router,
        private jobService: JobService) { }

    ngOnInit(): void {
        // this.jobService.getJobs().subscribe((jobsArray: Jobs[]) => {
        //     console.log(jobsArray);

        //     jobsArray.forEach((j: Jobs) => {
        //         this.jobs = [...this.jobs, j];
        //     })
        // })

        this.jobService.getMatchedJobs().subscribe((matchedJobs: any) => {
            // console.log(matchedJobs);

            for (let idJob of Object.keys(matchedJobs)) {
                var procent = matchedJobs[idJob];
                // console.log(idJob, procent);
                let jobId: number = +idJob;
                this.jobService.getJobById(jobId).subscribe((job: any) => {
                    // console.log('job', job);
                    let tempJob = job;
                    tempJob['procent'] = procent;
                    this.jobs = [...this.jobs, tempJob];
                })
                
            }

            
            // jobsArray.forEach()

            // jobsArray.forEach((j: Jobs) => {
            //     this.jobs = [...this.jobs, j];
            // })
        })

        // if (!this.jobs.length) {
        //     for (let i = 1; i <= 3; i++) {
        //         let tempJob = {
        //             'id_job': i,
        //             'id_company': i,
        //             'payment_level': i,
        //             'requested_skills': 'SQL' + i,
        //             'optional_skills': 'PHP' + i,
        //             'job_level': i,
        //             'description': 'lorem ipsus' + i
        //         }

        //         this.jobs.push(tempJob);
        //     }
        // }

    }

    callbackFunction(indexJob: number): string {
        return indexJob != this.currentJob ? 'd-none' : '';
    }

    seePrevJob(): void {
        this.changeState = !this.changeState;

        setTimeout(() => {
            if (this.currentJob - 1 >= 0) {
                this.currentJob--;
            } else {
                this.currentJob = this.jobs.length - 1;
            }
        }, 500);
        this.finishedDimmed = true;
    }

    seeNextJob(): void {
        this.changeState = !this.changeState;

        setTimeout(() => {
            if (this.currentJob + 1 < this.jobs.length) {
                this.currentJob++;
            } else {
                this.currentJob = 0;
            }
        }, 500);
    }

}
