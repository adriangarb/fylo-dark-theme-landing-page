import Navbar from "./Navbar"
import infoImage from './../../images/illustration-intro.png'
function Home() {
    return (
        <div className="home">
            <Navbar/>
            <div className="home__texts">
                <img src={infoImage} alt="infoImage"/>
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate
                    with friends family, and co-workers.</p>
                <button>Get started</button>
            </div>
            
        </div>
    )
}

export default Home
