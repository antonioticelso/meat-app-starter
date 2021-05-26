import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private retaurantsService: RestaurantsService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.retaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
