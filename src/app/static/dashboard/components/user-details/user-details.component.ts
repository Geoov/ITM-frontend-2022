import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/core/models/user-details';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    @Input() idUser: number = -1;
    user: UserDetails = {};
    userDetailsForm = new FormGroup({
       prenume: new FormControl(),
       nume: new FormControl(),
       varsta: new FormControl(),
       nr_tel: new FormControl(),
       studii_curente: new FormControl(),
       an: new FormControl(),
       last_job: new FormControl(),
       end_date: new FormControl(),
       start_date: new FormControl(),
       skiils: new FormControl()
    });
    
    constructor(
        private route: Router,
        private userService: UserService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        console.log(this.idUser);

        if (this.idUser !== -1) {
            this.userService.getUserById(this.idUser).subscribe((user: UserDetails) => {
                this.user = user;
                console.log(this.user);
            })
        }

    }

    onSubmit(): void {

    }

}
