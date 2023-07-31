import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise3Page } from './exercise3.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise3PageRoutingModule {}
