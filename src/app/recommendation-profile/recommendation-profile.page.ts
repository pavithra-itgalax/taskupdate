import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Gesture, GestureController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recommendation-profile',
  templateUrl: './recommendation-profile.page.html',
  styleUrls: ['./recommendation-profile.page.scss'],
})
export class RecommendationProfilePage implements OnInit {
  fav = false;
  profileList = [
    { profileImage: 'nazi1.jpgname', name: 'Priyanka', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.' },
    { profileImage: 'nazi1.jpgname', name: 'Swetha', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.' },
    { profileImage: 'nazi1.jpgname', name: 'Pavinethra', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.' },
    { profileImage: 'nazi1.jpgname', name: 'Lavanya', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.' },
    { profileImage: 'nazi1.jpgname', name: 'Rithika', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.' },
    { profileImage: 'nazi1.jpgname', name: 'Yazhini', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.' },
  ]
  constructor(
    public toastController: ToastController,) {}

  ngOnInit() {
  }

  async interested() {
    const toast = await this.toastController.create({
      color: 'primary',
      message: 'Interested.',
      duration: 2000
    });
    toast.present();
    setTimeout(() => {
      this.profileList.shift();
    }, 2000);
  }

  async notInterested() {
    const toast = await this.toastController.create({
      color: 'danger',
      message: ' Not Interested.',
      duration: 2000
    });
    toast.present();
    setTimeout(() => {
      this.profileList.shift();
    }, 2000);
  }

  async shortlisted() {
    const toast = await this.toastController.create({
      color: 'success',
      message: 'Shortlisted.',
      duration: 2000
    });
    toast.present();
  }

  star() {
    this.fav = !this.fav;
    if (this.fav === true) {
      this.shortlisted();
    }
    setTimeout(() => {
      this.profileList.shift();
      this.fav = false;
    }, 2000);
  }
}
