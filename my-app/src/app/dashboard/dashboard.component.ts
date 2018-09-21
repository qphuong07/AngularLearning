import { ItemService } from './../items/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../items/item';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
 
  constructor(private itemService: ItemService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.itemService.getProducts()
      .subscribe(heroes => this.items = heroes.slice(1, 5));
  }
}
