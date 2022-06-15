import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Item } from '../item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: Item[] = [];     // A collection of items (temporary declaration. Should come from a server)
  selectedItem?: Item;    // The currently selected item in the list. Displays details. 

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  // Select an item
  onSelect(item: Item): void {
    this.selectedItem = item; 
  }

  // Mark an item as done
  onChange(item: Item): void {
    // Mark item as done
    item.done = !item.done;
    this.itemService.updateState(item);
  }

  // Deletes an item
  onDelete(item: Item): void {
    this.itemService.deleteItem(item);
  }

  // Create an item
  addItem(title: string, description: string){
    const done:boolean = false;
    this.itemService.addItem({title, description, done} as Item)
      .subscribe(item => {
        this.items.push(item);
      })
  }

  getItems(): void {
     this.itemService.getItems().subscribe(items => this.items = items);
  }
}
