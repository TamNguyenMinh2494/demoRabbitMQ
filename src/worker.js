var amqp = require('amqplib/callback_api')

amqp.connect("amqp://localhost", (error, connection) => {
    if (error) {
        throw error
    }
    connection.createChannel((err, channel) => {
        if (err) {
            throw err
        }
        var queue = 'task_queue'
        channel.assertQueue(queue, {
            durable: true
        })
        channel.consume(queue, function (msg) {
            var secs = msg.content.toString().split('.').length - 1

            console.log(" [x] Received %s", msg.content.toString())
            setTimeout(function () {
                console.log(" [x] Done")
            }, secs * 1000)
        }, {
            noAck: true
        })
    })
})