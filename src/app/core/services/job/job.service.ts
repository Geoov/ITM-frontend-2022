import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jobs } from '../../models/jobs';

@Injectable({
    providedIn: 'root'
})
export class JobService {

    constructor(private httpClient: HttpClient) { }

    getJobs(): Observable<Jobs[]> {
        return this.httpClient.get<Jobs[]>(`${environment.laravel_api}/getJobs`);
    }

    getJobById(jobId: number): Observable<Jobs> {
        return this.httpClient.get<Jobs>(`${environment.laravel_api}/jobs/${jobId}`)
    }

    getMatchedJobs(): any {
        return this.httpClient.get(`${environment.laravel_api}/match`);
    }
}
