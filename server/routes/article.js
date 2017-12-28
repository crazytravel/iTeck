const Article = require('../models/article')

exports.list = async (ctx) => {
    const articles = await Article.find({})
    console.debug('articles => ', articles)
    if (!articles) {
        throw new Error('There was an error retrieving articles.')
    } else {
        ctx.body = articles
    }
}

exports.findOne = async (ctx) => {
    const article = await Article.findOne({"id": ctx.params.id})
    console.debug('article => ', article)
    if (!article) {
        throw new Error(`There was an error retrieving article with id: ${ctx.params.id}`)
    } else {
        ctx.body = article
    }
}