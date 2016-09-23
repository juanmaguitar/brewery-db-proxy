function beer (brewdb, reqApi, resApi) {

	let idBeer = reqApi.params.ID;

	var p = process;

	p.cacheBeer = p.cacheBeer || {};

	if ( p.cacheBeer[idBeer] ) {
		console.log("from cache : beer => " + idBeer);
		resApi.json( p.cacheBeer[idBeer]  )
	}
	else {
		brewdb.beer.getById(idBeer, {}, function(err, res) {
		  if (err) {
		  	console.log (err)
		  }
		  if (res) {
		  	p.cacheBeer[idBeer] = res;
		  	resApi.json(res);
		  }
		});
	}


}

module.exports = beer;