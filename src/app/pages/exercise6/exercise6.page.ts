import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.page.html',
  styleUrls: ['./exercise6.page.scss'],
})
export class Exercise6Page implements OnInit {
  constructor(public alertController: AlertController) { }
  ngOnInit() {
  }
  async showAlert() {
    const promptAlert = await this.alertController.create({
      header: 'Login',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Username'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Login Canceled');
          }
        },
        {
          text: 'Submit',
          handler(data) {
            if (data.username && data.password) {
              console.log('Login successful');
            } else {
              console.log('Error: Please fill out all required fields.');
            }
          },
        }
      ]
    });
    await promptAlert.present();
  }
}
