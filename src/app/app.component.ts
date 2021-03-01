import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, deleteItem } from './store/items.actions';
import { Item } from './model/item';
import { AppState } from './app.module';
import { getItems } from './store/items.selectors';


@Component({
  selector: 'mykl-root',
  template: `
    <form #f="ngForm" (submit) ="addItemHandler(f.value)">
      <input type="text" name="name" [ngModel]>
    </form>
    <li *ngFor="let item of (items$ | async)">{{ item.name }}
      <button (click) = "deleteItemHandler(item.id)">Delete</button>
    </li>
  `,
  styles: []
})

export class AppComponent {
  title = 'ngrx-twitch-demo';

  items$: Observable<Item[]> = this.store.select(getItems);
  items: Item[];

  constructor(private store: Store) {
/*     store.dispatch(addItem({ item: formData }));
    this.items$.subscribe(val => this.items = val); */
  }

  addItemHandler(item: Item): void{
    const formData = { id: Date.now(), ...item };
    this.store.dispatch(addItem({ item: formData }));
  }

  deleteItemHandler(id: number): void{
    this.store.dispatch(deleteItem({ id }));
  }

}


