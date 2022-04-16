import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyDetails } from '../../models/company-details';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

    constructor(private httpClient: HttpClient) { }

    getCompanyById(companyId: number): Observable<CompanyDetails> {
        return this.httpClient.get<CompanyDetails>(`${environment.laravel_api}/com/${companyId}`);
    }
}


