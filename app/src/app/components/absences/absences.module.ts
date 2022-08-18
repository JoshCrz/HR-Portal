import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsencesComponent } from './absences.component';
import { AbsencesRoutingModule } from './absences-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AbsencesComponent
  ],
  imports: [
    CommonModule,
    AbsencesRoutingModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class AbsencesModule { }
