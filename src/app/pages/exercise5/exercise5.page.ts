import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.page.html',
  styleUrls: ['./exercise5.page.scss'],
})
export class Exercise5Page implements OnInit {
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async showSharingActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Share',
      buttons: [
        {
          text: 'Share via Email',
          icon: 'mail',
          handler: () => {
            console.log('Email!');
          }
        },
        {
          text: 'Share via SMS',
          icon: 'chatbubbles',
          handler: () => {
            console.log('SMS!');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }
}
