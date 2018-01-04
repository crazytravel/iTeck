import fetch from 'isomorphic-unfetch'

import Head from '../components/Head'
import MainHeader from '../components/MainHeader'
import ArticleDetail from '../components/ArticleDetail'


const API_URL = process.env.API_URL

const Article = ({article}) => {
    return (
        <div>
            <Head title={"iTeck - " + article.title}/>
            <MainHeader/>
            <ArticleDetail articleImg={article.image}
                           avatar={'/static/avatar.jpg'}
                           articleTitle={article.title}
                           articleContent={article.content}/>
        </div>
    )
}

Article.getInitialProps = async ({req, query}) => {
    const res = await fetch(API_URL + '/articles/' + query.id)
    const data = await res.json()
    return {
        article: data
    }
}

export default Article
