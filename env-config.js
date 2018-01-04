const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.API_URL': prod ? 'http://admin.iteck.cc/api' : 'http://localhost:4000/api'
}