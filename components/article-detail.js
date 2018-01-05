import PropTypes from 'prop-types'

const ArticleDetail = ({articleImg, avatar, articleTitle, articleContent}) => (
    <div className="container">
        <div className="header">
            <h2>{articleTitle}</h2>
            <img src={avatar}/>
        </div>
        <div className="article-img"><img src={articleImg}/></div>
        <p>{articleContent}</p>
        <style jsx>{`
            .container {
                display: flex;
                flex-direction: column;
                margin: 30px;
                box-shadow: 10px 10px 50px rgba(0, 0, 0, .1);
                background-color: #FFFFFF;
                border-radius: 3px;
                position: relative;
                padding: 20px;
            }
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .header > img {
                height: 40px;
                border-radius: 50%;
            }
            .article-img {
                margin-top: 20px;
            }

        `}</style>
    </div>
)

ArticleDetail.propTypes = {
    articleImg: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    articleTitle: PropTypes.string.isRequired,
    articleContent: PropTypes.any.isRequired,
}

export default ArticleDetail