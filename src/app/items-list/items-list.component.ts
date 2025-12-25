import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../shared/models/item.model';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  searchText = '';

  items: Item[] = [
    { id: 1, title: 'Item One', description: 'Description for item one', isFeatured: true, priority: 'high' },
    { id: 2, title: 'Item Two', description: 'Description for item two', isFeatured: false, priority: 'normal' },
    { id: 3, title: 'Item Three', description: 'Description for item three', isFeatured: false, priority: 'low' },
  ];

  onItemSelected(item: Item): void {
    console.log('Selected item:', item);
  }

  get filteredItems(): Item[] {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.items;

    return this.items.filter(i =>
      i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
    );
  }
}
