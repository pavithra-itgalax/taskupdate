import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpandableProfilePage } from './expandable-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ExpandableProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpandableProfilePageRoutingModule {}
