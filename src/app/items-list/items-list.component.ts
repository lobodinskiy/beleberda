import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../shared/models/item.model';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  items: Item[] = [
    {
      id: 1,
      title: 'Item One',
      description: 'Description for item one',
      isFeatured: true,
      priority: 'high',
    },
    {
      id: 2,
      title: 'Item Two',
      description: 'Description for item two',
      isFeatured: false,
      priority: 'normal',
    },
    {
      id: 3,
      title: 'Item Three',
      description: 'Description for item three',
      isFeatured: false,
      priority: 'low',
    },
  ];
}
