import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/core/models/user-details';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-see-candidate',
  templateUrl: './see-candidate.component.html',
  styleUrls: ['./see-candidate.component.scss']
})
export class SeeCandidateComponent implements OnInit {
    @Input() idUser: number = -1;
    user: UserDetails = {};

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
}
