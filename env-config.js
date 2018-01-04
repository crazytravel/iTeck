const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.API_URL': prod ? 'https://www.iteck.cc/api' : 'http://localhost:4000/api'
}