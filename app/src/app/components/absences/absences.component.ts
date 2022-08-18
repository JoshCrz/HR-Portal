import { Component, OnInit } from '@angular/core';
import { faCalendar, faCalendarDay, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {

  faCalendar = faCalendar;
  faCalendarDay = faCalendarDay;
  faCalendarWeek = faCalendarWeek;

  constructor() { }

  ngOnInit(): void {
  }

}
