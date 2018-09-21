import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  items : Item[];
  selectedItem : Item;
  onSelect(item: Item){
    this.selectedItem = item;
  }
  constructor(private itemService : ItemService){
  }
  getHeroes(): void {
    this.itemService.getHeroes().subscribe(items => this.items = items);
  }
}
