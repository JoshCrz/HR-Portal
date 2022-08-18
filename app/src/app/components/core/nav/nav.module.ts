import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NgbNavModule,
    FontAwesomeModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
