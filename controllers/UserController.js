const Users = require('../models/users')

module.exports = {
    get: (params => {
        return new Promise((resolve, reject) => {
            Users.find(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })

    })
}