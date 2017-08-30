/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */


var calculatorModule = (function(){
  var memory = 0;
  var total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    
    function load(num){
      validate(num);
      total = num;
      return total;
    }
  

  /**
   * Return the value of `total`
   * @return { Number }
   */
   
   function getTotal(){
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function add(num){
    validate(num);
    return total += num;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function subtract(num){
    validate(num);
     return total -= num;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function multiply(num){
    validate(num);
    return total *= num;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function divide(num){
    validate(num);
    return total /= num;
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function recallMemory(){
    return memory;

   }
  /**
   * Stores the value of `total` to `memory`
   */

   function saveMemory(){
    memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */
  
  function clearMemory(){
    memory = 0;
  }
  
 

  /**
   * Validation
   */
  
   function validate(num){
    if(typeof num !== "number"){
     alert("Please Enter A Number");
    }
   }

 
   //return calculator;
   //
   return {
    load: load,  
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory,
    validate: validate
  };

});


var useCalc = calculatorModule();
useCalc.add(100);
useCalc.subtract(20);
useCalc.multiply(5);
useCalc.divide(10);
console.log(useCalc.getTotal());

