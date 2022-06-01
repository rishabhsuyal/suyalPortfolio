import React,{useState,useEffect,useRef} from 'react';
import "./index.scss";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
          setLetterClass('text-animate-hover')
      }, [])

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            'gmail',
            'template_j9k4aib',
             form.current,
             'KPBSMoxInQRXM3Y0l'
        ).then( ()=>{
            alert("MESSAGE SUCESSFULLY SENT")
            window.location.reload(false)
        },
        ()=>{
            alert("FAILED TO SEND")
        }
         )

    }
    
  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
        <h1>
            <AnimatedLetters 
                letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
        </h1>
        <p>
            I am interested in working as SDE .
            However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
        
        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail} >
                <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>

                </ul>
            </form>
        </div>

        </div>

        <div className="info-map">
          Rishabh suyal,
          <br />
          Noida,
          <br />
          Sector 71, 201301 <br />
          <br />
          <span>rishabhsuyal2001@gmail.com</span>
        </div>

        <div className='map-wrap'>
        <MapContainer center={[28.626640, 77.384804]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.626640, 77.384804]}>
              <Popup>suyal lives here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact