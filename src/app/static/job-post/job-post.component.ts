import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {
  email: string = '';
  role: string | number = '-1';
  idUser: number = 0;

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(
      private router: Router,
      private authService: AuthService,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
      if (this.authService.isLoggedIn()) {
          
          this.authService.decode().subscribe((data: any) => {
              this.role = data.role;
              this.email = data.email;
              this.idUser = data.id_user;
          })
       
        } else {
          this.router.navigate(['/home']);
        }
  
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required],
        });
      }

  fetchData() : void {

  }
  onSubmit(): void {
    // const { email, password, role } = this.firstFormGroup.value;
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);

    // this.authService.register(email, password,role).subscribe((resp: any) => {
    //   // console.log(resp);
    // this.router.navigate(['/login']);
  };
    
}
