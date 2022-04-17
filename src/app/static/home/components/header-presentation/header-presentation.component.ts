import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-header-presentation',
  templateUrl: './header-presentation.component.html',
  styleUrls: ['./header-presentation.component.scss']
})
export class HeaderPresentationComponent implements OnInit {

  
  isLoggedIn: boolean = false;
  role: string | number = '-1';

  constructor(private router: Router,
      private authService: AuthService) { }

  ngOnInit(): void {
      if (this.authService.isLoggedIn()) {
          this.isLoggedIn = true;

          this.authService.decode().subscribe((data: any) => {
              this.role = data.role;
          })

      } else {
          this.isLoggedIn = false;
      }
  }

goToRegister(): void {
    this.router.navigate(['register']);
}
goToLogin(): void {
    this.router.navigate(['/login']);
}
getRole(){
  return this.role;
}
goToLogout(): void {
    this.isLoggedIn = false;
    this.authService.logout();
    this.role = '-1';
    this.router.navigate(['/home']);
}
}
