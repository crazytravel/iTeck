import NextHead from 'next/head'
import {string} from 'prop-types'

const defaultDescription = ''

const Head = (props) => (
    <NextHead>
        <meta charset="UTF-8"/>
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description || defaultDescription}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png"/>
        <link rel="apple-touch-icon" href="/static/touch-icon.png"/>
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882"/>
        <link rel="icon" href="/static/favicon.ico"/>
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
            }
            a:visited {
                color: #000000;
            }
        `}</style>
    </NextHead>
)

Head.propTypes = {
    title: string,
    description: string,
}

export default Head