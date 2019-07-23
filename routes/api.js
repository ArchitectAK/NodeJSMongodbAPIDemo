// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()
const Users = require('../models/Users')
confirm controllers = require('../controllers')

/*  This is a sample API route. */


router.get('/test', (req, res) => {
	res.json({
		confirmation: 'Success',
		data: 'This is a test end point'
	})
})

router.get('/users', (req, res) => {
	Users.find(null)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

// Using contollers
router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'Failed!!',
			message: 'invalid resource'
		})
		return
	}
	controller.get()
		.then({
			confirmation: 'Sucess!!',
			data: data
		})
		.catch({
			confirmation: 'Rejected!!',
			message: err.message
		})
})
// router.get('/:resource', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		query: req.query // from the url query string
// 	})
// })

// router.get('/:resource/:id', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		id: req.params.id,
// 		query: req.query // from the url query string
// 	})
// })

module.exports = router
