import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      {id: 0, title: 'Get coffee', description: 'I need coffee to do this.', done: false},
      {id: 1, title: 'Create repo', description: 'I need to store it somewhere', done: false},
      {id: 2, title: 'Create app', description: 'Time to create the app!', done: false},
    ];
    return {items};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 0;
  }
}