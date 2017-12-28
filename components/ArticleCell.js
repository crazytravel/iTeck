
const ArticleCell = ({image, title, content, date}) => (
    <div className="cell-container">
        <img className="cell-img" src={image}/>
        <div className="cell-wrapper">
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="cell-bottom">{date}</div>
        </div>
        <style jsx>{`
            .cell-container {
                max-width: 800px;
                height: 150px;
                background-color: #FFFFFF;
                display: flex;
                box-shadow: 0 1px 4px rgba(0, 0, 0, .28);
                border-radius: 2px;
                margin: 30px;
            }
            .cell-img {
                height: 150px;
            }
            a {
                display: flex;
            }
            .cell-wrapper {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 10px;
            }
            h3 {
                margin: 0;
                padding: 0;
            }
            p {
                color: #9B9B9B;
                font-size: 16px;
            }
            .cell-bottom {
                text-align: right;
            }
        `}</style>
    </div>
)

export default ArticleCell