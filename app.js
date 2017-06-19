//Importar as configuracoes do servidor
var app = require('./config/server');

//Parametrizar a porta
var server = app.listen(8989, function(){
  console.log('Servidor On');
});

var io = require('socket.io').listen(server);

app.set('io', io);

//criar conexao websocket
io.on('connection', function(socket){
  console.log('usuario conectou');

  socket.on('disconnect',function(socket){
    console.log('usuario desconectou');
  });

  socket.on('msgParaServidor',function(data){
    
    socket.emit('msgParaCliente', data);
    socket.broadcast.emit('msgParaCliente', data);

    //Atualizar participantes
    if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
      socket.emit('participantesParaCliente', data);
      socket.broadcast.emit('participantesParaCliente', data);
    }
     
  });

});
