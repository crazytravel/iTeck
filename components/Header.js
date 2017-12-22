import Link from 'next/link'

const Header = (props) => (
    <header>
        <Link href="/"><a><h1><span>i</span>Teck</h1></a></Link>
        <div className="avatar"><img src=""/></div>
    </header>
)

export default Header