import { ITEMS } from './mock-items';
import { Injectable } from "@angular/core";
import { Item } from "./item";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class ItemService {
  
    constructor() { }
    getHeroes(): Observable<Item[]> {
        return of(ITEMS);
      }
  
  }