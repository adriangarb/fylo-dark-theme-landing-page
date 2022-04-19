import logo from '../../images/logo.svg'
function Navbar() {
    return (
        <div className="home__navbar">
            <img alt="logo" src={logo}/>
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign in</li>
            </ul>
        </div>
    )
}

export default Navbar
