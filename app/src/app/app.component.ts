import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  authed: boolean = false;

  ngOnInit() {

    //if user is not authed - ask for login

    if (this.authed) {

    }


  }

}
