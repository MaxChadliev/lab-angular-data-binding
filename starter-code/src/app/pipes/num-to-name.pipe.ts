import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToName'
})
export class NumToNamePipe implements PipeTransform {

  transform(originalNumber: any, args?: any): any {
   
      if (originalNumber === 0) return "zero";
    
    let inputArray = originalNumber.toString().split('');
    
    let result = '';
    
      const singleDigits = ['','one','two','three','four','five','six','seven','eight','nine', 'ten', 'eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      const doubleDigits = ['','','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
      // const tripleDigits = ['', 'one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred']
    
    
      if (inputArray.length === 1) {
        return singleDigits[originalNumber]
      } else if (inputArray.length === 2 ){
          if(originalNumber >= 10 && originalNumber <= 19 ){
            return singleDigits[originalNumber]
          }
          
          result += doubleDigits[Number(inputArray[0])]
          result += ' '
          result += singleDigits[Number(inputArray[1])]
          
          return result;
        
        } else if (inputArray.length === 3){
          result += singleDigits[Number(inputArray[0])] + ' hundred';
          if(Number(inputArray[1]) === 1){
          result +=' '
          result += singleDigits[Number(inputArray[1]+inputArray[2])];
          return result
          } else {
          result +=' '
          result += doubleDigits[Number(inputArray[1])]
          result +=' '
          result += singleDigits[Number(inputArray[2])]
          return result +=''
          }
        }
    
        // console.log(result);
    
    
      }
    
    



  }


  


