import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
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
        skills: new FormControl(),
        description: new FormControl()
    });

    emptyObject: boolean = false;

    constructor(
        private route: Router,
        private userService: UserService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.fetchUser();

    }

    fetchUser(): void {
        if (this.idUser !== -1) {
            this.userService.getUserById(this.idUser).subscribe((user: UserDetails) => {
                this.user = user;
                console.log('usr', this.user);
                this.updateMyEmptyObject(false);
            })

            if (!Object.keys(this.user).length) {
                this.updateMyEmptyObject(true);
            }
        } else {
            this.updateMyEmptyObject(true);
        }
    }

    updateMyEmptyObject(boolValue: boolean): void {
        this.emptyObject = boolValue;
    }

    onSubmit(): void {
     

        let {prenume, nume,varsta, nr_tel, studii_curente, an, last_job, end_date, start_date, skills, description} = this.userDetailsForm.value;
    
        end_date = moment(end_date).format(moment.HTML5_FMT.DATE);
        start_date = moment(start_date).format(moment.HTML5_FMT.DATE);
 
        let id_user = this.idUser;


        if (this.emptyObject) {
            console.log('create');
            // create
            this.userService.insertUserDetails(id_user, prenume, nume, varsta, nr_tel, studii_curente, an, last_job, end_date, start_date, skills, description).subscribe((data) => {
                // console.log(data);
            })
        } else {
            console.log('noncreate');
            // update
        }
    }

}
