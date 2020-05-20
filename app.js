//kelvin holds temperature in kelvin
const kelvin=293;
//converting  to celciusfrom kelvin by stubtacting 273 from kelvin
const celcius=kelvin-273;
//converting celcius to fahrenheit
//convertng celcius to fahrenheit often gets a decimal number.using Math.floor to get it rounded down.
const fahrenheit=Math.floor(celcius * (9/5)+32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
       //convsrting celcius to Newton
//convertng celcius to Nweton often gets a decimal number.using Math.floor to get it rounded down.
  const newton=Math.floor(celcius*(33/100));  
  console.log(`The temperature is ${newton} Newton`); 