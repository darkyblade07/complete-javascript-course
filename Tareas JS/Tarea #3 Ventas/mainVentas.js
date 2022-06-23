window.onload = function() {

    var ventas = [1528,5956,8546,800,2210,1558];
    
    summ = 0;
    
    for (let i = 0; i < ventas.length; i++) {
       
        summ = summ + ventas[i];
    
      } 
      
    promSales = summ / ventas.length;
    
    console.log('Promedio de ventas: '+promSales.toFixed(2));
    console.log('Total semanal '+summ.toFixed(2));
    
    
    }