import { Component, OnInit } from '@angular/core';
import {FoodServicesService} from '../services/food-services.service'

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  newFood:any = {name: '', calories: '', image: ''}

  addFood() {
    this.newFood= {
      name: this.newFood.name,
      calories: this.newFood.calories,
      image: this.newFood.image,
      quantity: this.newFood.quantity
    }
    this.theService.serviceFoodList.unshift(this.newFood);
    this.newFood= {
      name: "",
      calories: "",
      image: "",
      quantity: "",

    }

  
  
}

  constructor(public theService: FoodServicesService) { }

  ngOnInit() {
  }

}
