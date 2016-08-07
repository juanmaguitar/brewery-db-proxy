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

## Installation

To run local server...

    PORT=8080 BREWERYDB_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX npm run dev

To run remotely (in heroku) the proper BREWERYDB_API_KEY should be set before deploying...

    heroku config:set BREWERYDB_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

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

### If you want to create a new app

    $  heroku create
    Creating sharp-rain-871... done, stack is cedar-14
    http://sharp-rain-871.herokuapp.com/ | https://git.heroku.com/sharp-rain-871.git
    Git remote heroku added

### If the app already exists

Just add as a remote repo

    $ git remote add heroku https://git.heroku.com/quiet-inlet-67115.git

## Heroku Deploy

Just commit to the heroku remote repo

    $ git push heroku master
    Counting objects: 343, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (224/224), done.
    Writing objects: 100% (250/250), 238.01 KiB, done.
    Total 250 (delta 63), reused 0 (delta 0)
    remote: Compressing source files... done.
    remote: Building source:
    remote:
    remote: -----> Node.js app detected
    remote:
    remote: -----> Creating runtime environment
    remote:
    remote:        NPM_CONFIG_LOGLEVEL=error
    remote:        NPM_CONFIG_PRODUCTION=true
    remote:        NODE_MODULES_CACHE=true
    remote:
    remote: -----> Installing binaries
    remote:        engines.node (package.json):  5.9.1
    remote:        engines.npm (package.json):   unspecified (use default)
    remote:
    remote:        Downloading and installing node 5.9.1...
    remote:        Using default npm version: 2.7.4
           ....
    remote: -----> Build succeeded!
    remote:        ├── ejs@2.4.1
    remote:        └── express@4.13.3
    remote:
    remote: -----> Discovering process types
    remote:        Procfile declares types -> web
    remote:
    remote: -----> Compressing... done, 9.4MB
    remote: -----> Launching... done, v8
    remote:        http://sharp-rain-871.herokuapp.com deployed to Heroku
    To https://git.heroku.com/nameless-savannah-4829.git
     - [new branch]      master -> master

## Heroku Logs

To see what's going on the remote server

    $ heroku logs
    2016-08-05T07:52:32.036514+00:00 heroku[router]: at=info method=GET path="/api/search/beers?q=ipa" host=quiet-inlet-67115.herokuapp.com request_id=0f5fbc67-e83b-469b-9736-2547979d124d fwd="80.33.152.186" dyno=web.1 connect=0ms service=570ms status=200 bytes=114341
    ...

