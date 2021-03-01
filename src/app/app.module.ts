import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { itemsReducer } from './store/items.reducer';
import { Item } from './model/item';
import { FormsModule } from '@angular/forms';

export interface AppState {
  items: Item[];
  auth: { token: string, role: string };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  StoreModule.forRoot({
      items: itemsReducer,
      auth: () => ({
        token: 'abc123',
        role: 'admin'
      })
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // massimo delle azioni
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
