window.onload=function(){
    
    var calcularBtn  =document.getElementById('calcularBtn');
    
    var resultadoLbl  =document.getElementById('resultadoLbl');
        
    calcularBtn.onclick=onCalcularBtn;
    
    function onCalcularBtn(){
        var cocaCola=1250.25;
        var papi=1850.50;
        var bolsa=1250.50;
        var precioBruto=cocaCola+papi+bolsa;
        var impuesto=0.13;
        var precioNeto= precioBruto +(precioBruto*impuesto);
        console.log('Precio Neto: ' +precioNeto.toFixed(2))
        resultadoLbl.innerHTML='Total a pagar: ' +precioNeto.toFixed(2);
    
    }
}