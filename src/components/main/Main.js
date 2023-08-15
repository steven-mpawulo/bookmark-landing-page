import React from 'react'
import Button from '../common/button/Button'
import IllustrationHero from '../../images/illustration-hero.svg'
import './main.css'

const Main = () => {
  return (
    <main>
        <section className='first-section'>
            <div className="first-section-left">
                <h1>A simple Bookmark <span>Manager</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam dignissimos ipsam repellat rerum vel necessitatibus pariatur vero nisi fuga provident, dolorem impedit iure molestiae, libero, cumque omnis. Laborum, quos.</p>
                <div className="first-section-inner-container">
                    <Button buttonText={"Get it on Chrome"} backgroundColor={"hsl(231, 69%, 60%)"} color={"white"} marginRight={"20px"}/>
                    <Button buttonText={"Get it on Firefox"}/>
                </div>
            </div>
            <div className="first-section-right">
                <div className="background-container">
                </div>
                <div className="image-container">
                <img src={IllustrationHero} alt="illustration-hero" className='illustration-hero'/>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default Main