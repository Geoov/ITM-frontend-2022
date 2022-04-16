import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jobs } from '../../models/jobs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient: HttpClient) { }

}