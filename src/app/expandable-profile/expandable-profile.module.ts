import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpandableProfilePageRoutingModule } from './expandable-profile-routing.module';

import { ExpandableProfilePage } from './expandable-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandableProfilePageRoutingModule
  ],
  declarations: [ExpandableProfilePage]
})
export class ExpandableProfilePageModule {}
