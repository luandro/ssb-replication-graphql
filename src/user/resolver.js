// const { whoami } = require('ssb-helpers')

module.exports = {
  whoami: (_, obj, { sbot }) => {
    sbot.whoami((err, info) => { if (err) { throw err } return info.id })
  },
}