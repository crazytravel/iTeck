const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.API_URL': prod ? 'https://iteck.cc/api' : 'http://localhost:3000/api'
}