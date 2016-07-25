function beers (brewdb, reqApi, resApi) {

	let query = reqApi.query.q;
	let aQuery = query.split(',');

	brewdb.beer.getById( aQuery, { withBreweries: "Y" }, function(err, res) {
	  if (err) {
	  	console.log (err)
	  }
	  if (res) {
	  	resApi.json(res);
	  }
	});

}

module.exports = beers;