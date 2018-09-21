import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../items/item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item : Item;
  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location){}
    
      ngOnInit(): void {
      this.getHero();
    }
    
    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.itemService.getProduct(id)
        .subscribe(item => this.item = item);
    }
    goBack(): void {
      this.location.back();
    }
}
