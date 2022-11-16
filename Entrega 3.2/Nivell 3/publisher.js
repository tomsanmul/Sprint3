//Sol.licitem la biblioteca RabbitMQ. Sino está, la instalem "npm install amqplib"
const { connect } = require('amqplib');
const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', function(error0, connection) {  //Ens conectem al servidor RabbitMQ
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {  //Creem un canal, que eson resideix la major part de la API per fer les coses
    if (error1) {
      throw error1;
    }

    //Per enviar, hem de declarar una cua per enviar a; llavor podrem publicar un misstage a la cua
    var queue = 'hello';
    var msg = 'Hello world';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

  
  setTimeout(function() {
    connection.close();
    process.exit(0)
    }, 500);

});


