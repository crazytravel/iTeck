import fetch from 'isomorphic-unfetch'

import Page from '../layouts/main'
import MainHeader from '../components/main-header'
import ArticleDetail from '../components/article-detail'


const API_URL = process.env.API_URL

const Article = ({article}) => {
    return (
        <Page title={'iTeck-' + article.title}>
            <MainHeader/>
            <ArticleDetail articleImg={article.image}
                           avatar={'/static/avatar.jpg'}
                           articleTitle={article.title}
                           articleContent={article.content}/>
        </Page>
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
