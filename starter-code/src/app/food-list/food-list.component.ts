import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FoodServicesService } from '../services/food-services.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[];
  foodsSearched: String = "";
  filteredFood: Array<any> = [];

  newList:Array<any> = [];
  
  constructor(public theService: FoodServicesService) { }

  ngOnInit() {
    this.foods = foods;
    this.filteredFood = foods;
    this.foods = this.theService.serviceFoodList;
  
  }
  
  searchItems(){ 
    this.filteredFood = this.foods.filter(singleFood => {
      return singleFood.name.toLowerCase().includes(this.foodsSearched.toLowerCase())
    });
  }



  formShowing:boolean = false

  toggleForm(){
    this.formShowing = !this.formShowing

  }


 addToMenu(thingToAdd){

    this.newList.unshift(thingToAdd)
}


  
}
  

