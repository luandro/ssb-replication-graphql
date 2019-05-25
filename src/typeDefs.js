const Replication = require('./replication/type')

const Query = `
  type Query {
    whoami: String
  }
`

const Subscription = `
  type Subscription {
    replication: Replication
  }
`

const Schema = () => [`
  schema {
    query: Query
    subscription: Subscription
  }
`]

module.exports = [
  Schema,
  Query,
  Subscription,
  Replication,
]