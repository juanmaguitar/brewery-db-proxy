function beers (brewdb, reqApi, resApi) {

	let query = reqApi.query.q;
	let aQuery = query.split(',');

	var p = process;

	p.cacheBeers = p.cacheBeers || {};

	if ( p.cacheBeers[aQuery] ) {
		console.log("from cache : beers => " + aQuery);
		resApi.json( p.cacheBeers[aQuery]  )
	}
	else {
		brewdb.beer.getById( aQuery, { withBreweries: "Y" }, function(err, res) {
		  if (err) {
		  	console.log (err)
		  }
		  if (res) {
		  	p.cacheBeers[aQuery] = res;
		  	resApi.json(res);
		  }
		});
	}


}

module.exports = beers;