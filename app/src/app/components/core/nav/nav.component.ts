import { Component, OnInit } from '@angular/core';
import { faUser, faPlaneDeparture, faAddressBook, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  expand: boolean = false;
  faUser = faUser;
  faPlaneDeparture = faPlaneDeparture;
  faAddressBook = faAddressBook;
  faCog = faCog;

  constructor() { }

  ngOnInit(): void {

  }

}
