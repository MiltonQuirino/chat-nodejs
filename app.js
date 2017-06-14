//Importar as configuracoes do servidor
var app = require('./config/server');

//Parametrizar a porta
app.listen(8989, function(){
  console.log('Servidor On');
});