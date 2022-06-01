import React, { useEffect, useState } from 'react';
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import CardBlock from '../Card';

import Leet from "../../assets/images/safety.jpg";
import Digi from "../../assets/images/digi.jpg";
import Ecom from "../../assets/images/ecom.jpg";
function Work() {

  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <div className="container work-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['W', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>
      </div>


      <div className='work-wrap'>

        <CardBlock
          cardTitle="One-Tap-Safety"
          cardContent="Just one click and ambulance at your doorstep"
          cardUrl="https://github.com/rishabhsuyal/safehealth"
          CardImage={Leet}
        />

        <CardBlock
          cardTitle="Digi Parking"
          cardContent="No need to search for free space. Just book & park"
          cardUrl="https://github.com/rishabhsuyal/safehealth"
          CardImage={Digi}
        />

        <CardBlock
          cardTitle="E-commerce"
          cardContent="Implemented with Reactjs & firebase"
          cardUrl="https://github.com/rishabhsuyal/ecommerce-Reactjs-Redux-Firebase"
          CardImage={Ecom}
        />


      </div>


      <Loader type='pacman' />
    </div>
  )
}

export default Work