// const { whoami } = require('ssb-helpers')

module.exports = {
  whoami: (_, obj, { sbot }) => new Promise((resolve, reject) => {
    sbot.whoami((err, info) => {
      if (err) { reject(err) }
      resolve(info.id)
    })
  }),
}