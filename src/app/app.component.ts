import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  states = [{ code: 'AP', name: 'Andhra Pradesh' }, { code: 'KL', name: 'Kerala' }, { code: 'TN', name: 'Tamil Nadu' }];
  galleryScreens: Array<any>;

  constructor() {

    this.galleryScreens = [
      {
        'img': 'assets/images/photo1.jpg',
        'description': 'A night view of some beautiful moutain',
        'liked': '0'
      },
      {
        'img': 'assets/images/photo2.jpg',
        'description': 'Clones between jelly fishes',
        'liked': '0'
      },
      {
        'img': 'assets/images/photo3.jpg',
        'description': 'Deep water',
        'liked': '0'
      }
    ];

  }

  likeMe(i) {
    if (this.galleryScreens[i].liked === 0) {
      this.galleryScreens[i].liked = 1;
    } else {
      this.galleryScreens[i].liked = 0;
    }

  }

  deleteMe(i) {
    this.galleryScreens.splice(i, 1);
    console.log(i);
  }
}
