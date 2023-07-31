import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise5PageRoutingModule } from './exercise5-routing.module';

import { Exercise5Page } from './exercise5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise5PageRoutingModule
  ],
  declarations: [Exercise5Page]
})
export class Exercise5PageModule {}
