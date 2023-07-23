import React from 'react'
import './Hero.css'
import Header from '../Header/Header';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left">
           <Header/>
           <div className="the-best-ad">
            <div>
            </div>
                <span>The best fitness club in the town</span>
           </div>

           <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape</span>
                <span>Your</span>
            </div>

            <div>
                <span>Ideal body</span>
            </div>
            <div >
                <span>

                In here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
            </div>
           </div>

           <div className="figures">
            <div>
                <span>+140</span>
                <span>Expert Coaches</span>
            </div>
            <div>
                <span>+978</span>
                <span>Members Joined</span>
            </div>
            <div>
                <span>+50</span>
                <span>Fitness Programs</span>
            </div>
            
            
           </div>
        </div>
        <div className="right">
            
        </div>
    </div>
  )
}

export default Hero;
