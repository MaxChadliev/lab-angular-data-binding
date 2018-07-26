import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NumToNamePipe } from './pipes/num-to-name.pipe';
import {FoodServicesService} from './services/food-services.service'
import { AddFoodComponent } from './add-food/add-food.component'
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe,
    NumToNamePipe,
    AddFoodComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FoodServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
