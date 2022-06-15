import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items = ITEMS; // A collection of items (temporary declaration. Should come from a server)
  doneItems?: Item[] = [] // Stores done items
  selectedItem?: Item; // The currently selected item in the list. Displays details. 

  constructor() { }

  ngOnInit(): void {
  }

  // Select an item
  onSelect(item: Item): void {
    this.selectedItem = item; 
  }

  // Mark an item as done
  onDone(item: Item): void {
    // Mark item as done
    item.done = true;
    // Get index in array
    // Remove from items, and add to doneItems
    const index: number = this.items.indexOf(item);
    if (index !== -1){
      this.items.splice(index, 1);
    }
  }
}
