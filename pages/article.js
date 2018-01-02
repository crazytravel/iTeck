import fetch from 'isomorphic-unfetch'

import MainHeader from '../components/MainHeader'
import ArticleDetail from '../components/ArticleDetail'
import {API_URI} from '../next.config'

const Article = ({article}) => {
    return (
        <div>
            <MainHeader/>
            <ArticleDetail articleImg={article.image}
                           avatar={'/static/avatar.jpg'}
                           articleTitle={article.title}
                           articleContent={article.content}/>
            <style jsx>{`

            `}</style>
        </div>
    )
}

Article.getInitialProps = async ({req, query}) => {
    const res = await fetch(API_URI + '/articles/' + query.id)
    const data = await res.json()
    return {
        article: data
    }
}

export default Article
