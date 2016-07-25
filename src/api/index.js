import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import BreweryDb from 'brewerydb-node'

export default ({ config, db }) => {
	let api = Router();
	let brewdb = new BreweryDb('3ffc0422d9dfcadf2369b0a3a0ec7946');

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/beers', (reqApi, resApi) => {

		var query = reqApi.query.q;

		brewdb.search.beers({  q: query  }, function(err, res) {
		  if (err) {
		  	console.log (err)
		  }
		  if (res) {
		  	resApi.json(res);
		  }
		});

	});

	return api;
}
