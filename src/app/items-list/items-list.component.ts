import { Component, OnDestroy, OnInit } from '@angular/core';
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
    // 1) Отримали початкові дані асинхронно через getItems()
    const initSub = this.dataService.getItems().subscribe((data) => {
      // одразу пушимо в BehaviorSubject як стартовий стан
      this.items = data;
    });

    // 2) Підписалися на реактивний стан items$
    const stateSub = this.dataService.items$.subscribe((data) => {
      this.items = data;
    });

    this.sub.add(initSub);
    this.sub.add(stateSub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onItemSelected(item: Item): void {
    console.log('Selected item:', item);
  }

  // Викликаємо сервіс для фільтрації (вимога)
  onSearchChange(): void {
    this.dataService.filterItems(this.searchText);
  }
}
