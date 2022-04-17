import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserDetails } from '../../models/user-details';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getUserById(userId: number): Observable<UserDetails> {
        return this.httpClient.get<UserDetails>(`${environment.laravel_api}/userdetails/${userId}`);
    }

    insertUserDetails(id_user:number, prenume: string, nume: string, varsta: number, nr_tel: string, studii_curente: string, an: number, last_job: string, end_date: string, start_date: string, skills: string, description: string): Observable<string> {
        return this.httpClient
            .post<string>(environment.laravel_api + '/userdetails', { id_user, prenume, nume, varsta, nr_tel, studii_curente, an, last_job, end_date, start_date, skills, description })
    }
}
