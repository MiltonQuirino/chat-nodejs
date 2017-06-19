//Importar as configuracoes do servidor
var app = require('./config/server');

//Parametrizar a porta
var server = app.listen(8989, function(){
  console.log('Servidor On');
});

var io = require('socket.io').listen(server);

//criar conexao websocket
io.on('connection', function(socket){
  console.log('usuario conectou');

  socket.on('disconnect',function(socket){
    console.log('usuario desconectou');
  });

});
