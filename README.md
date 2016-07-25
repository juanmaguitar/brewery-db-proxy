BreweryDb Express Proxy w/  ES2015
==================================

> Based on: https://github.com/developit/express-es6-rest-api

This repository contains the code for a proxy server to access the brewerydb.com API

## Routes Examples

### Search

    /api/search/all?q=coors
    /api/search/beers?q=dogfish
    /api/search/breweries?q=dogfish

### Beers

    /api/beer/iT9pf4
    /api/beers?q=iT9pf4,Omi2cO

## Production Examples

    https://quiet-inlet-67115.herokuapp.com/api/search/all?q=mahou
    https://quiet-inlet-67115.herokuapp.com/api/search/beers?q=mahou
    https://quiet-inlet-67115.herokuapp.com/api/search/breweries?q=mahou

    https://quiet-inlet-67115.herokuapp.com/api/beer/iT9pf4
    https://quiet-inlet-67115.herokuapp.com/api/beers?q=iT9pf4,Omi2cO