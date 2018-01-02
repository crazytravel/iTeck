import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import {API_URI} from '../next.config'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import ArticleCell from '../components/ArticleCell'

const Index = ({articles}) => (
    <div className="page-container">
        <MainHeader/>
        <article>
            {articles.map((article, index) => (
                <Link key={index} href={`/article?id=${article.id}`}>
                    <a><ArticleCell image={article.image}
                                    title={article.title}
                                    content={article.content}
                                    date={article.date}/></a>
                </Link>
            ))}
        </article>
        <MainFooter/>
        <style jsx>{`
            .page-container {

            }
        `}</style>
    </div>
)

Index.getInitialProps = async ({req}) => {
    const res = await fetch(API_URI + '/articles')
    const data = await res.json()
    return {
        articles: data
    }
}

export default Index
