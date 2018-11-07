const {io} = require('../server');

//escuchar sucesos
io.on('connection', (client)=>{
    console.log("Usuario conectado");

    client.emit('enviarMensaje', {
        usuario:'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    
    client.on('disconnect', ()=>{
        
        console.log("Usuario desconectado!");
    });


    //escuchar al cliente

    client.on('enviarMensaje', (data, callback)=>{
        console.log(data);
        
        client.broadcast.emit("enviarMensaje", data);
        /*setTimeout(()=>{
            callback();
        }, 1500);*/
        

    });

});