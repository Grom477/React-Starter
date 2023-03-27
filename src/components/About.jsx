import React from 'react'
import Saly from '../img/Saly-10.png'

function About(props) {
  return (
    <>
    <main className='about'>
        <section className="container">
            <div className="container__up">
                <img src={Saly} alt="" />
                <h1 className="container__up-title">I’m Amirhossein Meydani A <span>Backend</span>  and <span>Android</span>  Programmer and <span>UI/UX</span>  Designer</h1>
            </div>
            <div className="container__down">
                <h5 className="container__down-text">{props.title1}</h5>
                <p className="container__down-info">{props.text1}.</p>

                <h5 className="container__down-text">{props.title2}</h5>
                <p className="container__down-info">{props.text2}</p>

                <h5 className="container__down-text">{props.title3}</h5>
                <p className="container__down-info">{props.text3}</p>
            </div>
        </section>
    </main>
    </>
  )
}


export default About