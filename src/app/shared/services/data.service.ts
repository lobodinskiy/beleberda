import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly allItems: Item[] = [
    { id: 1, title: 'Item One', description: 'Description for item one', isFeatured: true, priority: 'high' },
    { id: 2, title: 'Item Two', description: 'Description for item two', isFeatured: false, priority: 'normal' },
    { id: 3, title: 'Item Three', description: 'Description for item three', isFeatured: false, priority: 'low' },
  ];

  private readonly itemsSubject = new BehaviorSubject<Item[]>(this.allItems);
  readonly items$ = this.itemsSubject.asObservable();

  getItems(): Observable<Item[]> {
    return of(this.allItems);
  }

  filterItems(query: string): void {
    const q = query.trim().toLowerCase();

    if (!q) {
      this.itemsSubject.next(this.allItems);
      return;
    }

    const filtered = this.allItems.filter((i) =>
      i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
    );

    this.itemsSubject.next(filtered);
  }

  
  getItemById(id: number): Observable<Item | undefined> {
    const found = this.allItems.find((i) => i.id === id);
    return of(found);
  }
}
