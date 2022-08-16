import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NgbNavModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
