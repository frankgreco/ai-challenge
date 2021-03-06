import code from 'http-response-codes';
import express from 'express';
import log from '../utils/logger';
import {
  createTasks,
  executeTasks,
  sortResults,
  parseResults,
  getMatches,
  postResults,
  initialize,
  postError
} from '../src/tournament.js';
import {
  NoSuchCollectionError,
  AlgorithmError,
  InitializationError
} from '../src/errors';

const router = express.Router();

router.route('/:collection')
  .get((req, res, next) => {

      getMatches(req.params.collection, req.query.games)
          .then(initialize)
          .then(({ matches, result }) => {
              res.location(`${result._id}`);
              res.status(code.HTTP_ACCEPTED).json(result);
              return { matches, id: result._id }
          })
          .then(createTasks)
          .then(executeTasks)
          .then(parseResults)
          .then(sortResults)
          .then(postResults)
          .then(() => log.info('tournament completed'))
          .catch(NoSuchCollectionError, err => res.sendStatus(code.HTTP_NO_CONTENT)) // eslint-disable-line no-unused-vars
          .catch(InitializationError, err => next(err))
          .catch(AlgorithmError, err => next(err))
          .error(postError)
          .catch(err => log.error(err.message, err))

  });

module.exports = router;
