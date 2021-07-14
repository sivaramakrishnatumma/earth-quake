import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EarthQuakeDataService } from 'src/app/services/earth-quake-data.service';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {
  events: any[] = [];
  magnitudeSubscription!: Subscription;


  constructor(private subjectsService: SubjectsService, private dataService: EarthQuakeDataService) { }

  ngOnInit(): void {
    this.magnitudeSubscription = this.subjectsService.magnitudeData.subscribe(({startDate, endDate, magnitude}) => {
      this.getEarchQuakeData(startDate, endDate, magnitude);
    })
  }

  ngOnDestroy() {
    this.magnitudeSubscription.unsubscribe();
  }

  getEarchQuakeData(startDate: string, endDate: string, magnitude: number) {
    this.dataService.getEvents(startDate, endDate, magnitude).subscribe(data=> {
      console.log(data);
      this.events = data;
    })
  }

}
