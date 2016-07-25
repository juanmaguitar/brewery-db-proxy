function search (method, brewdb, reqApi, resApi) {

	var query = reqApi.query.q;

	brewdb.search[method]({  q: query  }, function(err, res) {
	  if (err) {
	  	console.log (err)
	  }
	  if (res) {
	  	resApi.json(res);
	  }
	});

}

module.exports = search;