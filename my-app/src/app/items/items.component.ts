import { Component, OnInit } from '@angular/core';
import { ITEMS } from './mock-items';
import { Item } from './item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items = ITEMS;
  selectedItem : Item;
  onSelect(item: Item){
    this.selectedItem = item;
  }
}
