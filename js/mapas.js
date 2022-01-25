var map;
let latitud = 41.67097948393865;
let longitud = -3.6769259916763985;


function inicio()
{

map = new google.maps.Map(
    document.getElementById('map_canvas'), {
    // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
        center: new google.maps.LatLng(latitud,longitud),//latitud,longitud),//
       // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
    zoom: 18, // zoom del mapa
    draggableCursor: 'auto', // forma del cursor
    draggingCursor: 'crosshair',
    mapTypeId: google.maps.MapTypeId.SATELLITE // tipo de mama
});
}
inicio();
 


//Dibujar marker semaforo
function dibujarMarcadorSemaforo(latitud,longitud){
    borrar_Semaforos()
    let LatLgn=new google.maps.LatLng(latitud,longitud);
    var icono = {
        url: "./imagenes/rav.jpg", // url
        scaledSize: new google.maps.Size(25, 35), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    
    marker = new google.maps.Marker({
        position: LatLgn,
        icon: icono,
        map: map,
        nombre: "verde"
    }
    );
    a_SemaforoMarkers.push(marker);
}

//Borrar marker semaforo
function borrar_Semaforos(){
    for (var i = 0; i < a_SemaforoMarkers.length; i++ ) {
        a_SemaforoMarkers[i].setMap(null);
    }     
    a_SemaforoMarkers= new Array();
}

function borrar_semaforos_control(){
    for (var i = 0; i < semaforos_control.length; i++ ) {
        semaforos_control[i].setMap(null);
    }     
    semaforos_control= new Array();
}

function crearIcono(posicionFinal){
    var icono = {
        url: "./imagenes/iconoIot.jpg", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    
    marker = new google.maps.Marker({
        position: posicionFinal,
        icon: icono,
        map: map,
        nombre: "imagen1"
    }
    );
    a_IOTMarkers.push(marker);
}

function borrarIOT(){
    for (var i = 0; i < a_IOTMarkers.length; i++ ) {
        a_IOTMarkers[i].setMap(null);
    }     
    a_IOTMarkers= new Array();
}



function semaforos_control(){
    for (var i = 0; i < semaforos_control.length; i++ ) {
        semaforos_control[i].setMap(null);
    }     
    semaforos_control= new Array();
}


function semaforo(){
    for (var i = 0; i < aSemaforo.length; i++ ) {
        aSemaforo[i].setMap(null);
    }     
    aSemaforo= new Array();
}
