window.onload = function() {

var temperatura = [36,38,70,80,22,15,65];

summ = 0;

for (let i = 0; i < temperatura.length; i++) {
   
    summ = summ + temperatura[i];

  } weeklyTemp = summ / temperatura.length;
  
console.log('La temperatura promedio fue: '+weeklyTemp.toFixed(2));


}