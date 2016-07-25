function beer (brewdb, reqApi, resApi) {

	let idBeer = reqApi.params.ID;

	brewdb.beer.getById(idBeer, {}, function(err, res) {
	  if (err) {
	  	console.log (err)
	  }
	  if (res) {
	  	resApi.json(res);
	  }
	});

}

module.exports = beer;