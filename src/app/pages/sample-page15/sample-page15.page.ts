import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page15',
  templateUrl: './sample-page15.page.html',
  styleUrls: ['./sample-page15.page.scss'],
})
export class SamplePage15Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSwipe(event: any) {
    const itemEl = event.target.closest('ion-item-sliding').querySelector('ion-item');
    const itemValue = itemEl.getAttribute('value');
    console.log('Swiped item value:', itemValue);
  }
}
