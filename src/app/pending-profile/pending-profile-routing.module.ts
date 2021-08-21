import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingProfilePage } from './pending-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PendingProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingProfilePageRoutingModule {}
