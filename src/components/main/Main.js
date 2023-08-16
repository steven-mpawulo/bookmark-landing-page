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
        <section className='second-section'>
            <h2>Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur amet eligendi fugiat adipisci dolor at, quaerat nobis fugit assumenda aliquid quos pariatur necessitatibus consequatur dolore accusantium qui officia non quisquam!</p>
            <div className="container-for-tab-section">
                <span>Simple Bookmarking</span>
                <span>Speedy searching</span>
                <span>Easy sharing</span>
            </div>
        </section>
    </main>
  )
}

export default Main