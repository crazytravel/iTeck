import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Head from '../components/Head'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import ArticleCell from '../components/ArticleCell'

const API_URL = process.env.API_URL

const Index = ({articles}) => (
    <div>
        <Head title="iTeck"/>
        <MainHeader/>
        <article>
            {articles.map((article, index) => (
                <Link key={index} as={`/article/${article.id}`} href={`/article?id=${article.id}`}>
                    <a><ArticleCell image={article.image}
                                    title={article.title}
                                    content={article.content}
                                    date={article.date}/></a>
                </Link>
            ))}
        </article>
        <MainFooter/>
    </div>
)

Index.getInitialProps = async ({req}) => {
    const res = await fetch(API_URL + '/articles')
    const data = await res.json()
    return {
        articles: data
    }
}

export default Index
