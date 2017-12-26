import Link from 'next/link'

const MainHeader = (props) => (
    <div>
        <header>
            <h1 className="head-title-black"><Link href="/"><a><span className="head-title-red">i</span>Teck</a></Link></h1>
            <div className="avatar"><img src="/static/avatar.jpg"/></div>
        </header>
        <style jsx>{`
            header {
                height: 75px;
                line-height: 75px;
                padding: 0 20px;
                background: #FFFFFF;
                box-shadow: 0 1px 6px rgba(0, 0, 0, .24);
                display: flex;
                justify-content: space-between;
            }
            h1 {
                width: 100px;
                margin: 0;
                padding: 0;
            }
            .head-title-red {
                color: #F70202;
            }
            .head-title-black {
                color: #000000;
            }
            .avatar {
                display: flex;
                flex-direction: column;
                justify-content: center;

            }
            .avatar > img {
                height: 40px;
                border-radius: 50%;

            }

        `}</style>
    </div>
)

export default MainHeader