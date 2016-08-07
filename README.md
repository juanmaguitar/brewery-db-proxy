BreweryDb Express Proxy w/  ES2015
==================================

> Based on: https://github.com/developit/express-es6-rest-api

This repository contains the code for a proxy server to access the brewerydb.com API

## Heroku Installation

- Install the [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- Log at heroku:

```bash
    $ heroku login
    Enter your Heroku credentials.
    Email: juanma.garrido@gmail.com
    Password (typing will be hidden): 
    Logged in as juanma.garrido@gmail.com
```


git remote add heroku https://git.heroku.com/quiet-inlet-67115.git

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

## Installation

To run local server...

    PORT=8080 BREWERYDB_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX npm run dev

To run remotely (in heroku) the proper BREWERYDB_API_KEY should be set before deploying...

    heroku config:set BREWERYDB_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

