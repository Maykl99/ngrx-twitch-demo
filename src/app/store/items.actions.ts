import { createAction, props } from '@ngrx/store';
import { Item } from './../model/item';

export const addItem = createAction(
  '[items] add',
  props<{ item: Item }>()
);

export const deleteItem = createAction(
  '[items] delete',
  props<{ id: number }>()
);
