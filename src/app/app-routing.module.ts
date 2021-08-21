import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pending-profile/pending-profile.module').then(m => m.PendingProfilePageModule)
  },
  {
    path: 'expandable-profile',
    loadChildren: () => import('./expandable-profile/expandable-profile.module').then(m => m.ExpandableProfilePageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./recommendation-profile/recommendation-profile.module').then(m => m.RecommendationProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
