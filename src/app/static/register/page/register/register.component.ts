import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  constructor(private router: Router, private UserService: UserService) { }
  

  registerForm = new FormGroup({
    email: new FormControl('', [
        Validators.required,
        Validators.email,
    ]),
    password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
    ]),
    role: new FormControl('', [
      Validators.required
  ])
});
ngOnInit(): void {
}

onSubmit(): void {
    const { email, password, role } = this.registerForm.value;
    console.log(this.registerForm.value);

    this.UserService.register(email, password,role).subscribe((resp: any) => {
      // console.log(resp);
    this.router.navigate(['/login']);
  });
    
}

}
