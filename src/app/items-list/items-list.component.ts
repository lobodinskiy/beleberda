import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

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
export class ItemsListComponent implements OnInit, OnDestroy {
  searchText = '';
  items: Item[] = [];

  private sub = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    
    this.sub.add(
      this.dataService.getItems().subscribe((data) => {
        this.items = data;
      })
    );

    
    this.sub.add(
      this.dataService.items$.subscribe((data) => {
        this.items = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onItemSelected(item: Item): void {
    console.log('Selected item:', item);
  }

  
  onSearchChange(): void {
    this.dataService.filterItems(this.searchText);
  }
}
