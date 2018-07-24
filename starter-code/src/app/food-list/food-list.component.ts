import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[];
  foodsSearched: String = "";
  filteredFood: Array<any> = [];

  newFood: Object = {};
  listFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.filteredFood = foods;
  
  }
  
  searchItems(){ 
    this.filteredFood = this.foods.filter(singleFood => {
      return singleFood.name.toLowerCase().includes(this.foodsSearched.toLowerCase())
    });
     console.log(this.filteredFood)
  }

  addFood() {
    this.foods.push(this.newFood);
  
  this.newFood= {
    name: "",
    calories: "",
    image: "",
    quantity: ""
  }
}

  addToList() {
    this.foods.push(this.listFood);

    this.listFood= {
      name: "",
      calories: "",
    }
  }
  


  
}
  

