import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise5Page } from './exercise5.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise5PageRoutingModule {}
