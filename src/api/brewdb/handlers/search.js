function search (method, brewdb, reqApi, resApi) {

	var query = reqApi.query.q;
	var p = process;

	p.cacheSearch = p.cacheSearch || {};
	p.cacheSearch[method] = p.cacheSearch[method] || {};

	if ( p.cacheSearch[method][query] ) {
			console.log("from cache : search => " + method + " | " + query);
		resApi.json( p.cacheSearch[method][query]  )
	}
	else {
		brewdb.search[method]({  q: query  }, function(err, res) {
		  if (err) {
		  	console.log (err)
		  }
		  if (res) {
		  	p.cacheSearch[method][query] = res;
		  	resApi.json(res);
		  }
		});
	}

}

module.exports = search;