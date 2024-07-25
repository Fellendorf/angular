import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarApiService {
  private readonly API_TOKEN: string = environment.CAR_API_TOKEN;
  private readonly API_SECRET: string = environment.CAR_API_SECRET;

  constructor(private readonly httpClient: HttpClient) {}

  public getCarList() {
    return this.httpClient
      .get('https://freetestapi.com/api/v1/cars')
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: any) {
    console.log('Server error:', error);
    return of(null);
  }
}
