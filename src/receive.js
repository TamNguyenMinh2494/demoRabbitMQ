var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (error, connection) => {
    if (error) {
        throw error
    }

    connection.createChannel((err, channel) => {
        if (err) {
            throw err
        }
        var queue = 'hello'
        channel.assertQueue(queue, {
            durable: false
        });
        console.log(" [*] Waiting for message in %s. To exit press CTRL + C", queue)
        channel.consume(queue, function (msg) {
            console.log(" [x] Received %s", msg.content.toString())
        }, {
            noAck: true,
        });
    });


});