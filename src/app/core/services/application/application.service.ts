import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jobs } from '../../models/jobs';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(private httpClient: HttpClient) { }

    submitApplication(id_job: number, id_user: number, like: number): any {
        return this.httpClient.post(`${environment.laravel_api}/applications/`, { id_job, id_user, like });
    }

    getApplicationsByCompanyId(id_company:number): any {
        return this.httpClient.get(`${environment.laravel_api}/applications/${id_company}`);
    }
}
