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
        return this.httpClient.get<UserDetails>(`${environment.laravel_api}/usersdetails/${userId}`);
    }
}
