import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationProfilePage } from './recommendation-profile.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendationProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationProfilePageRoutingModule {}
