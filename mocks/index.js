const delay = require('mocker-api/lib/delay')
const noProxy = process.env.NO_PROXY === 'true'

function loadData(data) {
  const result = {}
  Object.keys(data).forEach((key) => {
    result[key] = require(data[key])
  })
  return result
}

const proxy = loadData({
  'GET /api/v1/banners': './db/banners',
})
module.exports = noProxy ? {} : delay(proxy, 1000)
