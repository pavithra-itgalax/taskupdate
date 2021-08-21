import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture, GestureConfig, GestureController } from '@ionic/angular';
import { createGesture } from '@ionic/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pending-profile',
  templateUrl: './pending-profile.page.html',
  styleUrls: ['./pending-profile.page.scss'],
})
export class PendingProfilePage implements OnInit {
  option = {
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true
  }
  

  profileList = [
    {profileImage: 'nazi1.jpgname', name: 'Priyanka', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.'},
    {profileImage: 'nazi1.jpgname', name: 'Swetha', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.'},
    {profileImage: 'nazi1.jpgname', name: 'Pavinethra', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.'},
    {profileImage: 'nazi1.jpgname', name: 'Lavanya', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.'},
    {profileImage: 'nazi1.jpgname', name: 'Rithika', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.'},
    {profileImage: 'nazi1.jpgname', name: 'Yazhini', specification: '27 Yrs, 5 ft 2 in, Tamil, Nair, MBBS, Doctor, Chennai, Tamilnadu, India.'},
  ]
  @ViewChild('tapCard') tapCard: ElementRef;

  constructor(
    public router: Router,
    public storage: Storage,
    private gestureCtrl: GestureController
  ) { }

  ngOnInit() {
    // this.initGesture();
  }

  async initGesture(){
    console.log("calling")
    const style = this.tapCard;
    const windowWidth = window.innerWidth;

    const options: GestureConfig = {
      el: this.tapCard.nativeElement,
      gestureName: 'tinder-swipe',
      onStart: () => {
        console.log("calling")
        // style.transition = "none";
      },
      onMove: (ev) => {
        console.log("calling")
        // style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX/20}deg)`
      },
      onEnd: (ev) => {
        console.log("calling")

        // style.transition = "0.3s ease-out";

        // if(ev.deltaX > windowWidth/2){
        //   style.transform = `translateX(${windowWidth * 1.5}px)`;
        //   this.match(true);
        // } else if (ev.deltaX < -windowWidth/2){
        //   style.transform = `translateX(-${windowWidth * 1.5}px)`;
        //   this.match(false);
        // } else {
        //   style.transform = ''
        // }

      }
    };

    const gesture: Gesture = await createGesture(options);

    gesture.enable();

  }

  match(ev){
    if(ev.detail){
      console.log("It's work")
    } else {
      console.log("check later");
    }
  }
  onCreate(){
    const gesture = this.gestureCtrl.create({
      el: this.tapCard.nativeElement,
      threshold: 0,
      gestureName: 'my-gesture',
      onStart: () => { this.viewProfile(this.profileList); }
    });
  
    gesture.enable();
  }

  viewProfile(penProfile){
    console.log(penProfile);
    this.storage.set('profile', penProfile);
    this.router.navigateByUrl("/expandable-profile");
  }
  goToR(){
    this.router.navigateByUrl("/recommendations");
  }
}
