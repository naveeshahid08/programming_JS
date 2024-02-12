// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

function fahrenheitToCelsius(Fahrenheit) {
  //let Celsius = Math.round((Fahrenheit - 32) * (5 / 9) * 10) / 10;
  let Celsius = (Fahrenheit - 32) * (5 / 9);
  // Math.round build_in function is used to minimize the decimal place for precisions and by multiple and divistion with 10 the decimal
  // is placed on the right place.
  return parseFloat(Celsius.toPrecision(2));
}
// Sample usage - do not modify
console.log(fahrenheitToCelsius(21)); // "-6,1"
