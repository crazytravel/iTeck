import PropTypes from 'prop-types'

import Meta from '../components/meta'
import Footer from '../components/footer'

const Page = (props) => (
    <div>
        <Meta title={props.title}/>
        {props.children}
        <Footer/>
    </div>
)

Page.propTypes = {
    title: PropTypes.string
}

export default Page