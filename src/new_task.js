var amqp = require('amqplib/callback_api')
amqp.connect('amqp://localhost', (error, connection) => {
    if (error) {
        throw error
    }
    connection.createChannel((err, channel) => {
        if (err) {
            throw err
        }
        var queue = 'task_queue'
        var msg = process.argv.slice(2).join(' ') || "Hello World from new task!"

        channel.assertQueue(queue, {
            durable: true
        })

        channel.sendToQueue(queue, Buffer.from(msg), {
            persistent: true
        })
        console.log(" [x] Sent '%s'", msg)
    })
    setTimeout(function () {
        connection.close()
        process.exit(0)
    }, 5000)
})

