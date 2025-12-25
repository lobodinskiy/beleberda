import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'items' },
      { path: 'items', component: ItemsListComponent },
      { path: 'items/:id', component: ItemDetailsComponent },
    ],
  },
  { path: '**', redirectTo: 'items' },
];
