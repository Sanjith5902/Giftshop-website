import './contact.css'
import Button from 'react-bootstrap/Button';
function Contact() {
    return (
        <>
        <div className='flex_contact'>
        <div className='container2'>
            <h2 className='contact_head'>"Tell us what you're looking for, and we'll help you find it."</h2>
            <h6 className='contact_sub'> Our team is here to help you find the perfect gift for every special moment...</h6>
            <div className='contact_social'>
                <i className="bi bi-instagram"></i>
                <div >
                    <h4 className='contact_id'>instagram</h4>
                    <h5>luxegiftsshop @instagram.com</h5>
                </div>

            </div>
            <div className='contact_social'>
                <i className="bi bi-telephone"></i>
                <div>
                    <h4 className='contact_id'>Phone No</h4>
                    <h5 className='contact_d'>+91-987xxxxxxx</h5>
                </div>
                
            </div>
            <div className='contact_social'>
                <i className="icon bi bi-envelope"></i>
                <div >
                    <h4 className='contact_id'>Email id</h4>
                    <h5 className='contact_d'>luxegiftsshop @gmail.com</h5>
                </div>
                
            </div>
             <div className='contact_social'>
                <i className="bi bi-geo-fill"></i>
                <div >
                    <h4 className='contact_id'>our location</h4>
                    <h5 className='contact_d'>10 Rose Garden Road, Coimbatore, Tamil Nadu</h5>
                </div>
                
            </div>
            

        </div>
        <div className='container1'>
            <div>
                <h1 className='h1_contact'>Contact us</h1>
                <div className='line1'>
                <div>
                    <h6>First name</h6>
                    <input type='text' placeholder=''/>
                </div>
                <div>
                    <h6>last name</h6>
                    <input type='text' placeholder=''/>
                </div>
                </div>
                <h6>Mobile number</h6>
                    <input type='number' placeholder=''/>
                    <h6>Email ID</h6>
                    <input type='email' placeholder=''/>
                    <h6>Messages</h6>
                    <textarea rows="4" cols="50"> </textarea> 
                    
                    <Button className='buttonstyle'>Submit</Button>

            </div>

        </div>
        </div>
        </>
    )}
    export default Contact;
