import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Album {
  title: string;
  artist: string;
  year: number;
}
@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.page.html',
  styleUrls: ['./exercise7.page.scss'],
})
export class Exercise7Page implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  cover: string = "https://cdn-icons-png.flaticon.com/512/4345/4345716.png";
  albums: Album[] = [
    {
      title: 'Thriller',
      artist: 'Michael Jackson',
      year: 1982
    },
    {
      title: 'Back in Black',
      artist: 'AC/DC',
      year: 1980
    },
    {
      title: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      year: 1973
    }
  ];
  async presentEditAlbumForm(album: Album) {
    const alert = await this.alertController.create({
      header: 'Edit Album',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: album.title,
          placeholder: 'Title'
        },
        {
          name: 'artist',
          type: 'text',
          value: album.artist,
          placeholder: 'Artist'
        },
        {
          name: 'year',
          type: 'number',
          value: album.year,
          placeholder: 'Year'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Edit process canceled');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Edit Album:', data);
            // Update the album with the edited data
            album.title = data.title;
            album.artist = data.artist;
            album.year = data.year;
          }
        }
      ]
    });

    await alert.present();
  }


  async deleteAlbum(album: Album) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete ${album.title}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Delete process canceled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Album deleted:', album);
            // Find the index of the album in the albums array
            const index = this.albums.indexOf(album);
            // Remove the album from the array
            if (index !== -1) {
              this.albums.splice(index, 1);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }

  async addNewAlbum() {
    const alert = await this.alertController.create({
      header: 'Add New Album',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Enter title'
        },
        {
          name: 'artist',
          type: 'text',
          placeholder: 'Enter artist name'
        },
        {
          name: 'year',
          type: 'number',
          placeholder: 'Enter released year'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Add New Album process canceled');
          }
        },
        {
          text: 'Add',
          handler: (data) => {
            console.log('New Album:', data);
            // Create a new album object
            const newAlbum: Album = {
              title: data.title,
              artist: data.artist,
              year: data.year
            };
            // Add the new album to the albums array
            this.albums.push(newAlbum);
          }
        }
      ]
    });
  
    await alert.present();
  }
}
