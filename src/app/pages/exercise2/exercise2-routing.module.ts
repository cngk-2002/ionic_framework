import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise2Page } from './exercise2.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise2PageRoutingModule {}
