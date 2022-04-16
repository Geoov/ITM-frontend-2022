import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}


  private static setSession(authResult: any): void {
    const expiresAt = moment().add(3, 'hours');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  login(email: string, password: string): Observable<string> {
    return this.http
      .post<string>(environment.laravel_api + '/login', {email, password})
      .pipe(tap((res) => AuthService.setSession(res)));
  }

  decode(): Observable<string> {
    return this.http.get<string>(environment.laravel_api + '/decode');
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    if (this.getExpiration()) {
      return moment().isBefore(this.getExpiration());
    } else {
      return false;
    }
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): any {
    const expiration = localStorage.getItem('expires_at');
    if (expiration != null) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }

  }

}
