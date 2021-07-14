import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EarthQuakeDataService {
  BASE_URL="https://earthquake.usgs.gov";

  constructor(private http: HttpClient) { }

  getEvents(startDate: string, endDate: string, magnitude: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&minmagnitude=${magnitude}`)
      .pipe(map((res: any) =>  res.features), catchError(error => throwError(error)))
  }
}
