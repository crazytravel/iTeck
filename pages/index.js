import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCell from '../components/ArticleCell'

export default () => (
    <div>
        <Header/>
        <article>
            <ArticleCell/>
            <ArticleCell/>
            <ArticleCell/>
        </article>
        <Footer/>
    </div>
)