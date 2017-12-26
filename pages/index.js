import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import ArticleCell from '../components/ArticleCell'

const articleData = [
    {
        "articleImg": "/static/1.png",
        "articleTitle": "Help Finding Information Online",
        "articleContent": "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory compaq laptop battery compaq laptop",
        "articleDate": "12-27-2017"
    },
    {
        "articleImg": "/static/2.png",
        "articleTitle": "Help Finding Information Online",
        "articleContent": "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory compaq laptop battery compaq laptop",
        "articleDate": "12-27-2017"
    },
    {
        "articleImg": "/static/3.png",
        "articleTitle": "Help Finding Information Online",
        "articleContent": "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory compaq laptop battery compaq laptop",
        "articleDate": "12-27-2017"
    }
]

export default () => {

    const articles = [];
    articleData.forEach((article, index) => {
        articles.push(<ArticleCell key={index} articleImg={article.articleImg}
                                   articleTitle={article.articleTitle}
                                   articleContent={article.articleContent}
                                   articleDate={article.articleDate}/>)
    })

    return (<div className="page-container">
        <MainHeader/>
        <article>
            {articles}
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
    </div>)
}