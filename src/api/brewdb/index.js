import BreweryDb from 'brewerydb-node'

import search from './handlers/search.js'
import beer from './handlers/beer.js'
import beers from './handlers/beers.js'

function setupBreweryDbApi ( api ) {

	let apiKey = process.env.BREWERYDB_API_KEY;
	let brewdb = new BreweryDb(apiKey);

	api.get('/search/all', search.bind(this, 'all', brewdb) )
	api.get('/search/beers', search.bind(this, 'beers', brewdb) )
	api.get('/search/breweries', search.bind(this, 'breweries', brewdb) )

	api.get('/beer/:ID', beer.bind(this, brewdb) )
	api.get('/beers', beers.bind(this, brewdb) )

}

module.exports = setupBreweryDbApi