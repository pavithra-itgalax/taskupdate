import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public storage: Storage
  ) { }

  ngOnInit(): void {
    this.createStorage();
  }
  
  async createStorage() {
    await this.storage.create();
  }
}
