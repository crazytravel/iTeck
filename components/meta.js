import Head from 'next/head'
import {string} from 'prop-types'

const defaultDescription = ''
const Meta = (props) => (
    <div>
        <Head>
            <title>{props.title || 'iTeck'}</title>
            <meta name="description" content={props.description || defaultDescription}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/static/favicon.ico"/>
        </Head>
        <style global jsx>{`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            html, body {
                width: 100%;
                height: 100%;
                background-color: #F4F4F4;
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
                font-size: 14px;
                line-height: 1.15;
                color: #000000;
            }
            a {
                text-decoration: none;
                color: #000000;
            }
            a:visited {
                color: #000000;
            }
        `}</style>
    </div>
)

Meta.propTypes = {
    title: string,
    description: string,
}

export default Meta