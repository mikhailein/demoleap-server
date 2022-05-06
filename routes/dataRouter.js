const Router = require('express')

const router = new Router()

const dataController = require('../controllers/dataController')

router.get('/', dataController.getData)

module.exports = router