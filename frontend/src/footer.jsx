import './footer.css'
import Button from 'react-bootstrap/Button';
function Footerbase() {
    return (
        <div className='footer-bg'>
            <div className='foot-contact'>
                <h2>Keep it touch</h2><br></br>
                <Button className='bttn3'>contact us</Button><br></br><br></br>
                <h6>Have questions or need assistance? Get in touch with us<br></br>we’re always happy to help you find the perfect gift.</h6>
                <div className='foot-social'>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-facebook"></i>
                </div>
            </div>
            <div className='foot-reach'>
                <h3>Reach Us</h3>
                <i className="bi bi-telephone"></i>
                <h5>+91-9xxxxxxxxx </h5><br></br>
                <i className="bi bi-envelope"></i>
                <h5>luxegift@gmail.com</h5>
            </div>
            <div className='foot-info'>
                <h4>Information</h4>
                <ul>
                    <li>term and conditions</li>
                    <li>privacy policy</li>
                    <li> refund policy</li>
                    <li>shipping policy</li>
                </ul>
            </div>
            <div className="copyright">
                © 2026 LuxeGift. All Rights Reserved.
            </div>
                            
        </div>
    );
}
export default Footerbase;
