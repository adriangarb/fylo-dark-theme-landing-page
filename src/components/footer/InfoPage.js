import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import logo from '../../images/logo.svg'
import logoUbication from '../../images/icon-location.svg'
import logoPhone from '../../images/icon-phone.svg'
import logoEmail from '../../images/icon-email.svg'

function InfoPage() {
    return (
        <div className="footer__box">
            <div className="footer__box__info">
                
                <img alt="logo" src={logo}/>
                <div className="footer__box__info__texts">
                    <div className="footer__box__info__texts__ubication">
                        <img src={logoUbication} alt="logoImage"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua</p>
                        
                    </div>
                    <div className="footer__box__info__texts__contact">
                        <div><img src={logoPhone} alt="logoImage"/><p>+1-543-123-4567</p></div>
                        <div><img src={logoEmail} alt="logoImage"/><p>example@fylo.com</p></div>
                    </div>
                    <div className="footer__box__info__texts__content">
                        <p>About Us</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer__box__info__texts__content">
                       <p>Contact Us</p>
                       <p>Terms</p>
                       <p>Privacy</p>
                    </div>
                    <div className="footer__box__info__texts__rrss">
                        <a href="https://facebook.com"><FaFacebookF/></a>
                        <a href="https://instagram.com"><FaTwitter/></a>
                        <a href="https://twitter.com"><FaInstagram/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage
