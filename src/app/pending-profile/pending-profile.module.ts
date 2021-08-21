import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingProfilePageRoutingModule } from './pending-profile-routing.module';

import { PendingProfilePage } from './pending-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingProfilePageRoutingModule
  ],
  declarations: [PendingProfilePage]
})
export class PendingProfilePageModule {}
