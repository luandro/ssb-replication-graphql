const { whoami } = require('./user/resolver')
const { replication } = require('./replication/resolver')

const Query = {
  whoami,
}

const Subscription = {
  replication
}

module.exports = {
  Query,
  Subscription,
}