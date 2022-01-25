var select=document.getElementById("elementosUrbanos");
select.addEventListener("change",dibujarSemaforo,false);

var selectIOT=document.getElementById("tipoIot");
selectIOT.addEventListener("change",dibujarIOT,false)

var bTrafico=document.getElementById("bgestionarTrafico");
bTrafico.addEventListener("click",cambiaimagenes,false)

var bparar=document.getElementById("finGestionarTrafico");
bparar.addEventListener("click",finalizar,false)

var continuar=true;

var imagenes= ["./imagenes/v.jpg","./imagenes/a.jpg","./imagenes/r.jpg"];

var a_Semaforo=new Array(); 
var semaforoElegido="";
var a_SemaforoMarkers=new Array();
var arraySemaforos=new Array();
a_IOTMarkers=new Array();

var total=0;
var contador=0;


// Pide datos de semaforos a la base de datos 
function rellenarSelect(){
    let formData = new FormData();
    var dato = "Semaforo";
    formData.append('articulo', dato);  fetch('http://www.informaticasc.com/CiudadI/php/consultaElementosUrbanos1.php', {
    method: 'POST',

    // headers: { "Content-type": "application/json;charset=UTF-8" },
    body: formData
    })
    .then(resp => {

      return resp.json();
    })
    .then(json => {
      console.log(json); 
      rellenar_select(json)    
    })
    .catch(err => { console.log("ERROR :" + err); });


    // var ajaxrequest = new XMLHttpRequest();
    // ajaxrequest.open("POST", "http://www.informaticasc.com/CiudadI/php/consultaElementosUrbanos.php", true);
    // ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // ajaxrequest.onreadystatechange = function ()
    // {
    //     //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
    //     if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
    //         var datosLeidos = ajaxrequest.responseText;
    //         datos_consulta=datosLeidos;
    //         // console.log("Pepe  :" + datos_consulta);
    //         rellenar_select(datos_consulta);
    //     }
    // };
    // let envio='Envio='+'Semaforo';
    // ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // ajaxrequest.send(envio);    
}


// Pide datos de iot a la base de datos 
function dibujarIOT(){
    let formData = new FormData();
    var dato = selectIOT.value;
    formData.append('articulo', dato);  fetch('http://www.informaticasc.com/CiudadI/php/consultaDispositivosIot1.php', {
    method: 'POST',
    // headers: { "Content-type": "application/json;charset=UTF-8" },
    body: formData
    })
    .then(resp => {

      return resp.json();
    })
    .then(json => {
      console.log(json);  
      dibujarMarkersIOT(json) 
    })
    .catch(err => { console.log("ERROR :" + err); });
    // var ajaxrequest = new XMLHttpRequest();
    // ajaxrequest.open("POST", "http://www.informaticasc.com/CiudadI/php/consultaDispositivosIot.php", true);
    // ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // ajaxrequest.onreadystatechange = function ()
    // {
    //     //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
    //     if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
    //         var datosLeidos = ajaxrequest.responseText;
    //         datos_consulta=datosLeidos;
    //         dibujarMarkersIOT(datos_consulta);
    //     }
    // };
    // let envio='Envio='+selectIOT.value;
    // ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // ajaxrequest.send(envio);    
}

rellenarSelect();

//Rellena select
function rellenar_select(datos_consulta){
    for(let i=0;i<datos_consulta.length;i++){
        arraySemaforos.push(datos_consulta[i]);
        let option = document.createElement("option");
        option.setAttribute("value", datos_consulta[i].id);
        let optionTexto = document.createTextNode(datos_consulta[i].nombre);
        option.appendChild(optionTexto);
        select.appendChild(option);
    }
}


// Dibuja semaforoElegido
function dibujarSemaforo(){
    for(let i=0;i<arraySemaforos.length;i++){
        if(select.value==arraySemaforos[i].id){
            dibujarMarcadorSemaforo(arraySemaforos[i].latitud,arraySemaforos[i].longitud);
            semaforoElegido=arraySemaforos[i];
            break;
        }
    }
}


// Dibuja elementos IOT
function dibujarMarkersIOT(datos_consulta){
    borrarIOT();

    for(let i=0;i<datos_consulta.length;i++){
        medirDistancia(datos_consulta[i]);
        
    }
}

// Mide distancia
function medirDistancia(datos){

    var posicionInicial = new google.maps.LatLng(semaforoElegido.latitud,semaforoElegido.longitud);
    var posicionFinal = new google.maps.LatLng(datos.Latitud,datos.Longitud);
    var distancia = google.maps.geometry.spherical.computeDistanceBetween(posicionInicial,posicionFinal);
    if(distancia<=distanciaIot.value){
        crearIcono(posicionFinal);
        total+=parseInt(datos.UltimaMedicion);
        contador++;
    }

}

//Boton finalizar
function  finalizar(){
    borrar_semaforos_control();
    borrarIOT();
    borrar_Semaforos();
    continuar=false;
}

//Calcular retardo
function calcularRetardo(){
    let media=total/contador;
    MensajeTemperatura.innerText="Temperatura="+media+"º";
    var retardo=0;
    if(media>32){
        retardo=10000;
    }
    if(media<=32&&media>25){
        retardo=5000;
    }
    if(media<=25){
        retardo=2000;
    }
    return retardo;
    
}


//Funcion para parar un tiempo determinado
function delay(n){
    console.log(n);
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}

//Cambiar semaforo
async function cambiaimagenes(){
    borrar_Semaforos()
    continuar=true;
    let datos_semaforo=semaforoElegido;

    let LatLgn=new google.maps.LatLng(datos_semaforo.latitud,datos_semaforo.longitud);
    var icono = {
        url: "./imagenes/r.jpg", // url
        scaledSize: new google.maps.Size(25, 35), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    
    marker = new google.maps.Marker({
        position: LatLgn,
        icon: icono,
        map: map,
        estado: "rojo"
    }
    );
    a_SemaforoMarkers.push(marker);
    let retardo=calcularRetardo();
    let color=marker.estado;
    let imagen="";

    while(continuar){
        switch (color) {
            case "verde": {
              console.log(color);
              color = "ambar";
              imagen = "./imagenes/a.jpg";
              l = 0.2 * retardo;
              break;
            }
            case "ambar": {
                console.log(color);
                color = "rojo";
                imagen= "./imagenes/r.jpg";
                l = retardo;
              break;
            }
            case "rojo": {
                console.log(color);
                color = "verde";
                imagen = "./imagenes/v.jpg";
                l = retardo;
                
              break;
            }
            
       
    }
    var icono = {
        url: imagen, // url
        scaledSize: new google.maps.Size(25, 35), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    
    marker = new google.maps.Marker({
        position: LatLgn,
        icon: icono,
        map: map,
        estado: "color"
    }
    );
    a_SemaforoMarkers.push(marker)
    
     await delay(l);
    }
}