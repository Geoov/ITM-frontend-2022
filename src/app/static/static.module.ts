import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/page/home/home.component';
import { HeaderPresentationComponent } from './home/components/header-presentation/header-presentation.component';
import { PartnersComponent } from './home/components/partners/partners.component';
import { AdvantagesComponent } from './home/components/advantages/advantages.component';
import { ApplyNowComponent } from './apply-now/page/apply-now/apply-now.component';
import { JobCardComponent } from './apply-now/components/job-card/job-card.component';
import { RegisterComponent } from './register/page/register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/page/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/page/dashboard/dashboard.component';
import { CompanyDetailsComponent } from './dashboard/components/company-details/company-details.component';
import { UserDetailsComponent } from './dashboard/components/user-details/user-details.component';
import { JobPostComponent } from './job-post/job-post.component';
import { MatDividerModule } from '@angular/material/divider';
import { SeeApplicationComponent } from './see-applications/page/see-application/see-application.component';
import { SeeCandidateComponent } from './see-applications/components/see-candidate/see-candidate.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatDividerModule
],
  declarations: [
    HomeComponent,
    HeaderPresentationComponent,
    PartnersComponent,
    AdvantagesComponent,
    RegisterComponent,
    ApplyNowComponent,
    JobCardComponent,
    LoginComponent,
    DashboardComponent,
    CompanyDetailsComponent,
    UserDetailsComponent,
    JobPostComponent,
    SeeApplicationComponent,
    SeeCandidateComponent,
]

})

export class StaticModule {
}
