import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(4)
        ])
    });

    constructor(private router: Router,
        private authService: AuthService) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const { email, password } = this.loginForm.value;
        console.log(this.loginForm.value);

        this.authService.login(email, password).subscribe((resp: any) => {
            this.router.navigate(['/home']);
        });
    }

}
