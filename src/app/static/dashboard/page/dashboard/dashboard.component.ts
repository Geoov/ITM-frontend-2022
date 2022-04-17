import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    email: string = '';
    role: string | number = '-1';
    idUser: number = 0;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        if (this.authService.isLoggedIn()) {
            
            this.authService.decode().subscribe((data: any) => {
                this.role = data.role;
                this.email = data.email;
                this.idUser = data.id_user;
                console.log(this);
            })
         
          } else {
            this.router.navigate(['/home']);
          }
    }

    fetchData() : void {

    }

}
