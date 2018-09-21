import { ITEMS } from './mock-items';
import { Injectable } from "@angular/core";
import { Item } from "./item";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class ItemService {
  
    constructor() { }
    getProducts(): Observable<Item[]> {
        //call server here
        return of(ITEMS);
      }
  
    getProduct(id: number): Observable<Item> {
      // TODO: send the message _after_ fetching the hero
      //this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(ITEMS.find(hero => hero.id === id));
    }
  }