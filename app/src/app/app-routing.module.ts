import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./components/core/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'absences',
    loadChildren: () => import('./components/absences/absences.module').then(m => m.AbsencesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
