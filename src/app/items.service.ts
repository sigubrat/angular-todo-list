import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
private itemUrl = 'api/items';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(
    private http: HttpClient,
  ) { }
  

  /* GET-request to mock-server. Returns array of items. */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl);
  }

  /* POST-request to mock-server. Adds a new item to the server. */
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemUrl, item, this.httpOptions);
  }

  /* PUT-request to mock server. Changes value of item: done*/
  updateState(item: Item): Observable<Item> {
    return this.http.put<Item>(this.itemUrl, item, this.httpOptions);
  }

  deleteItem(item: Item) {
    console.log('Sending delete-post to URL: '+ this.itemUrl+'/'+item.id)
    return this.http.delete<Item>(this.itemUrl+'/'+item.id);
  }
}
