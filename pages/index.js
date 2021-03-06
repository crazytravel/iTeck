import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Page from '../layouts/main'
import MainHeader from '../components/main-header'
import ArticleCell from '../components/article-cell'

const API_URL = process.env.API_URL

const Index = ({articles}) => (
    <Page>
        <MainHeader/>
        <div className="container">
            <div className="content">
                {articles.map((article, index) => (
                    <Link key={index} as={`/article/${article.id}`} href={`/article?id=${article.id}`}>
                        <a><ArticleCell image={article.image}
                                        title={article.title}
                                        content={article.content}
                                        date={article.date}/></a>
                    </Link>
                ))}
            </div>
            <div className="side">

            </div>
        </div>
        <style jsx>{`
            .container {
                display: flex;
                flex-direction: row;
            }
            .content {
                flex: 4;
            }
            .side {
                flex: 1;
            }
        `}</style>
    </Page>
)

Index.getInitialProps = async ({req}) => {
    const res = await fetch(API_URL + '/articles')

    const data = await res.json()
    return {
        articles: data
    }
}

export default Index
