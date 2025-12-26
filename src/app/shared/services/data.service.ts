import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly items: Item[] = [
    { id: 1, title: 'Item One', description: 'Description for item one', isFeatured: true, priority: 'high' },
    { id: 2, title: 'Item Two', description: 'Description for item two', isFeatured: false, priority: 'medium' },
    { id: 3, title: 'Item Three', description: 'Description for item three', isFeatured: false, priority: 'low' },
  ];

  getItems(): Item[] {
    return this.items;
  }
}
