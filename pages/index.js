import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import {API_URI} from '../next.config'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import ArticleCell from '../components/ArticleCell'

const Index = (articles) => (
    <div className="page-container">
        <MainHeader/>
        <article>
            {articles.map((article, index) => (
                <Link href={`/article?id=${article.id}`}>
                    <a><ArticleCell key={index} articleImg={article.articleImg}
                                    articleTitle={article.articleTitle}
                                    articleContent={article.articleContent}
                                    articleDate={article.articleDate}/></a>
                </Link>
            ))}
        </article>
        <MainFooter/>
        <style jsx>{`
            .page-container {

            }
        `}</style>
        <style global jsx>{`
            html, body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                background-color: #F4F4F4;
            }
            a {
                text-decoration: none;
            }
            a:visited {
                color: inherit;
            }
        `}</style>
    </div>
)

Index.getInitialProps = async ({req}) => {
    const res = await fetch(API_URI + 'article')
    const data = await res.json()
    return {
        articles: data
    }
}

export default Index
