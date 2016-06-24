require('isomorphic-fetch')
fetchMock = require('fetch-mock')
BASE_URL = require('./helpers').BASE_URL
API_KEY = require('./helpers').API_KEY

Layout = require('../src/Layout')

requestUrl = null
card = null
layoutId = '6EF60AA5-0541-408B-B9B5-B202485445F6'
clientStub = {
	apiKey: API_KEY
	baseUrl: BASE_URL
}


describe('Layout', ->
	beforeEach(->
		requestUrl = "#{BASE_URL}/layouts"
		card = new Layout(clientStub)
	)

	afterEach(fetchMock.restore)

	describe('get', ->
		beforeEach(->
			requestUrl += "/#{layoutId}"
			fetchMock.mock(requestUrl, 'GET', '{}')
		)

		it('should have the correct URL', (done) ->
			card.get(layoutId)
				.then(->
					expect(fetchMock.lastUrl(requestUrl)).toEqual(requestUrl)
					done()
				)
				.catch(done.fail)
		)

		it('should send a GET request', (done) ->
			card.get(layoutId)
				.then(->
					expect(fetchMock.lastOptions(requestUrl).method).toEqual('GET')
					done()
				)
				.catch(done.fail)
		)
	)
)