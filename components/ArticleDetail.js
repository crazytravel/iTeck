
const ArticleDetail = ({articleImg, avatar, articleTitle, articleContent}) => (
    <div className="container">
        <div className="cover-picture">
            <img src={articleImg}/>
            <span>{articleTitle}</span>
        </div>
        <div className="content">
            <img src={avatar}/>
            <p>{articleContent}</p>
        </div>
        <style jsx>{`
            .container {
                display: flex;
                flex-direction: column;
            }
            .cover-picture {
                flex: 3;
                position: relative;
            }
            .cover-picture > img {

            }
            .cover-picture > span {
                position: absolute;
            }
            .content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }
            .content > img {
                width: 20px;
                height: 20px;
                border-radius: 50%;
            }
            .content > p {
                flex: 1;
                font-size: 16px;

            }


        `}</style>
    </div>
)

export default ArticleDetail