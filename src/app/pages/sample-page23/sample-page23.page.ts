import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page23',
  templateUrl: './sample-page23.page.html',
  styleUrls: ['./sample-page23.page.scss'],
})
export class SamplePage23Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onNameFocus(event: any) {
    console.log('Focus value:', event.target.value);
  }
  onNameChange(event: any) {
    console.log('Change value:', event.target.value);
  }
  onNameInput(event: any) {
    console.log('Input value:', event.target.value);
  }
}
