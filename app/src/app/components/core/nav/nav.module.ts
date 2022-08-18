import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NgbNavModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
