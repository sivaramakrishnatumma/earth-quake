import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  startDate: string = "2014-01-01";
  endDate: string = "2014-01-02";
  magnitude: number = 5;

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.emitData();
  }

  mangitudeChangeHandler() {
    this.emitData();
  }

  emitData() {
    this.subjectsService.magnitudeData.next({startDate: this.startDate, endDate: this.endDate, magnitude: this.magnitude});
  }

}
