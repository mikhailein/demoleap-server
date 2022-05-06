const ApiError = require('../error/ApiError')
const data = require('../db.json')

class DataController {
    async getData(req, res, next) {
        try {
            return res.json(data)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

}

module.exports = new DataController()