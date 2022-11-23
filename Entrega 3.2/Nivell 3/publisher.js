//Exemple:  https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html


//Sol.licitem la biblioteca RabbitMQ. Sino está, la instalem "npm install amqplib"

const {
  connect
} = require('amqplib');

const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';
    var msg = 'Hello world';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
});