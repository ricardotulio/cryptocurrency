import Promise from 'bluebird'
import request from 'superagent'
import {
  concat,
  prop,
} from 'ramda'
import apiConfig from '../../config/api.js'

const list = () => Promise.resolve('/v1/ticker/')
  .then(concat(apiConfig.baseUrl))
  .then(request.get)
  .then(prop('body'))

export default {
  list,
}
