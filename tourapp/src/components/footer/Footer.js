import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="footerDiv">
            <p> Author: Zainab Malkawi </p>
                <div className="social-container">
                

                    <a href="https://www.youtube.com/c/jamesqquick"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/learnbuildteach/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>


            </div>

        </>

    )
}
export default Footer;

