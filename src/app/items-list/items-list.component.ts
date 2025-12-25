import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Item } from '../shared/models/item.model';
import { DataService } from '../shared/services/data.service';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  searchText = '';
  items: Item[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }

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
