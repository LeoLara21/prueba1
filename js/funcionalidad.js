
var intento=0;
var numero=0;
var creado=0;
var rel;

function crear_numero(){        
    var x = Math.floor(Math.random()*1000+1);      
    console.log(x);
    return x;
}

function reloj_on(){

    var cont=0;
    let reloj = setInterval(()=>{
        if(cont>=60){
            perdiste(reloj);
        }        
        document.getElementById("reloj").innerText="Quedan "+(60-cont)+" segundos Restantes";
        cont++;
    },1000);   
        
    return reloj;
}

function reloj_of(rel){
    clearInterval(rel);    
}

function ganaste(rel){
    document.getElementById("resultado").innerHTML ="FELICIDADES "+document.getElementById("nombre_usuario").value+"! HAS ADIVINADO!"; 
    reloj_of(rel);
    return false;
}

function perdiste(rel){
    reloj_of(rel);
    document.getElementById("resultado").innerText="HAS PERDIDO "+document.getElementById("nombre_usuario").value+", LO SIENTO! \n\n El número en el que pensaba era el "+creado+"\n su ultimo intento fue: "+localStorage.getItem(document.getElementById("nombre_usuario").value).value;
    return false;    
}

// function guardar_datos(nombre,numero){
//     localStorage.setItem(nombre,numero);
// }

function comenzar(){
    
    if(intento==0){
        creado = crear_numero();
        rel= reloj_on();
        intento++;
    }
    if(intento<=10){
        numero = document.getElementById("numero_usuario").value; 
        // guardar_datos( document.getElementById("nombre_usuario").value, numero);
        if(numero!=creado){     
            if(numero>creado){                        
                document.getElementById("resultado").innerHTML ="Casi "+document.getElementById("nombre_usuario").value+", un poco mas pequeño! \n le quedan "+(10-intento)+" intentos";
            }else{                       
                document.getElementById("resultado").innerHTML ="Casi "+document.getElementById("nombre_usuario").value+", un poco mas grande! \n le quedan "+(10-intento)+" intentos";                        
            }    
            intento++;
        }else{
            ganaste(rel); 
            intento=0;
        }        
    }
    else{
       perdiste(rel);
    }    

    return (false);
}

