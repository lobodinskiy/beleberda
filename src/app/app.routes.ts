import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ItemsListComponent } from './items-list/items-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ItemsListComponent },
    ],
  },
];
