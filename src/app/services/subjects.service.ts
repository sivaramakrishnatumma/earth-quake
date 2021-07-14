import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  magnitudeData = new Subject<any>();

  constructor() { }
}
