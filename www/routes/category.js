var db = require('./dao/dbOperation')

exports.list = function(req, res) {
	// get category list
	db.getCategories(req.cookies.user, function(ret) {
		if (ret == "error") {
			console.log(req.cookies.user + "gets category failed!")
			res.send({error: true, categoryList: ret})
		}
		else {
			res.send({error: false, categoryList: ret})
		}
	})
}

exports.add = function(req, res) {
	// add a category
	var item = req.body.name
	db.addCategory(req.cookies.user, item, function(ret) {
		if (ret == "success") {
			res.send({error: true})
		}
		else {
			console.log(req.cookies.user + "adds category failed!")
			res.send({error: false})
		}
	})
}

exports.update = function(req, res) {
	// update a category

}

exports.delete = function(req, res) {
	// delete a category
	var item = req.body.name
	db.deleteCategory(req.cookies.user, item, function(ret) {
		if (ret == "success") {
			res.send({error: false})
		}
		else {
			console.log(req.cookies.user + "adds category failed!")
			res.send({error: true})
		}
	})
}

exports.index = function(req, res) {
	// render category page
	res.render('category', {
		title: 'Category'
	})
}