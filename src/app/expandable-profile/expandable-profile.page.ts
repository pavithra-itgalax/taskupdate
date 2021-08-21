import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-expandable-profile',
  templateUrl: './expandable-profile.page.html',
  styleUrls: ['./expandable-profile.page.scss'],
})
export class ExpandableProfilePage implements OnInit {
  option = {
    centeredSlides: true,
  }
  ex = {
    name: '',
    specification: ''
  }
  
  constructor(
    public storage: Storage,
    public router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.storage.get("profile").then((val) => {
      this.ex = val;
    });
  }
  goToR(){
    this.router.navigateByUrl("/recommendations");
  }
}
