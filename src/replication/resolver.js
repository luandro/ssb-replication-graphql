const pull = require('pull-stream')

module.exports = {
  replication: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const channel = 'replication'
      return pull(
        sbot.replicate.changes(),
        pull.drain(replication => pubsub.publish(channel, { replication }))
      )
      return pubsub.asyncIterator(channel)
    }
  },
}