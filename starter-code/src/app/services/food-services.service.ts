import { Injectable } from '@angular/core';
import foods from '../foods';


@Injectable()
export class FoodServicesService {

  serviceFoodList:Array<any> = foods

  constructor() { }

}
