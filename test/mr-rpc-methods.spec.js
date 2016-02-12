/* eslint-env node, mocha */
const rpcMethods = require('../mr-rpc-methods')

const fakeSchema = {
  on: function () {}
}

describe('rpc methods', function () {
  it('should return a callback for exposing methods over socket.io-rpc', function (done) {
    const model = {}
    const fakeRpcInstance = {
      expose: function () {
        done()
      }
    }
    const exposeCb = rpcMethods(model, fakeSchema, {
      queryMiddleware: [
        function testMiddleware (queryAndOpts) {
          queryAndOpts.mQuery.where('owner').equals(this.moonridge._id)
        }
      ]
    })
    exposeCb(fakeRpcInstance)
  })
  it('should expose a query/liveQuery method which runs middlewares on built queries', function () {
    // TODO
  })
})