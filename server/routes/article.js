
const Article = require('../models/article')

exports.list = () => {
    return Article.find()
}