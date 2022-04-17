import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authentication/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private authService: AuthService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLoggedIn()) {

            return new Observable<boolean>((observer) => {
                this.authService.decode().toPromise().then((data: any) => {
                    if ((data.role === 1 && route.data['role'] === 'STUDENT_ROLE')
                        || (data.role === 2 && route.data['role'] === 'COMPANY_ROLE')) {
                        observer.next(true);
                        observer.complete();
                    } else {
                        observer.next(false);
                        observer.complete();
                    }
                })
            });
            
        } else {
            this.authService.logout();
            this.router.navigate(['/home']);
            return false;
        }
        return false;
    }
}

