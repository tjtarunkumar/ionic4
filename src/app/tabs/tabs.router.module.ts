import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'papers',
        children: [
          {
            path: '',
            loadChildren: '../papers/papers.module#PapersPageModule'
          }
        ]
      },
      {
        path: 'mypapers',
        children: [
          {
            path: '',
            loadChildren: '../my-papers/my-papers.module#MyPapersPageModule'
          }
        ]
      },
      {
        path: 'wishlist',
        children: [
          {
            path: '',
            loadChildren: '../wishlist/wishlist.module#WishlistPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: '../account/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/papers',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/papers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
