# Algorithm Service

> An AI Challenge microservice for AI implementations

## Description
Fascilitates create/retrieve/update/delete operations on AI implementations

## Quick Start
* **npm** `npm install && npm run dev`
* **yarn** `yarn && yarn run dev`

## Commands
* `npm run dev`: transpile es6 -> es5 and handle live changes via [nodemon](http://nodemon.io/) and enable debugging via [node-inspector](http://127.0.0.1:8080/?port=5858)
* `npm run start`: transpile es6 -> es5 and start the application
* `npm run test`: run all `*spec.js` files in the `spec/` directory
* `npm run coverage`: uses istanbul to determine the code coverage of the unit tests
* `npm run lint:dev`: cache the results in a `.eslintcache` file so that only changed files are checked  
* `npm run lint:prod`: lint files without results being cached

## Configuration
Environment configuration is fasciliated through `./confg/NODE_ENV.json`

## API
#### Documentation
[Swagger Schema](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/northwesternmutual/ai-challenge/master/algorithmService/swagger.json)

## Docker
A `Dockerfile` and `.dockerignore` are included that can be used to run this application in a docker container. The offical image can be found [here](https://hub.docker.com/r/northwesternmutual/aichallenge-algorithm/).
