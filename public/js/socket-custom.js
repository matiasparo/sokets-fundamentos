var socket = io();
// socket.on escuchar sucesos 
socket.on('connect', function(){
    console.log("conectado al servidor");
});

socket.on('disconnect', function(){
    console.log("desconectado del servidor");
});



//socket.emit emiten informacion
socket.emit('enviarMensaje', {
    usurio:'Matias',
    mensaje:'Hola loquito!'
}, function(resp){// funcion que se dispara cuado el server ejecuta el callback
    console.log("Se disparo el callback");
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor', mensaje);
});