import React from 'react'
import Button from '../common/button/Button'
import IllustrationHero from '../../images/illustration-hero.svg'
import './main.css'
import Card from '../common/card/Card'
import ChromeIcon from '../../images/logo-chrome.svg'
import FireFoxIcon from '../../images/logo-firefox.svg'
import OperaIcon from '../../images/logo-opera.svg'
import ArrowDown from '../../images/icon-arrow.svg'
import Question from '../common/question/Question'

const Main = () => {
    return (
        <main>
            <section className='first-section'>
                <div className="first-section-left">
                    <h1>A simple Bookmark <span>Manager</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam dignissimos ipsam repellat rerum vel necessitatibus pariatur vero nisi fuga provident, dolorem impedit iure molestiae, libero, cumque omnis. Laborum, quos.</p>
                    <div className="first-section-inner-container">
                        <Button buttonText={"Get it on Chrome"} backgroundColor={"hsl(231, 69%, 60%)"} color={"white"} marginRight={"20px"} />
                        <Button buttonText={"Get it on Firefox"} />
                    </div>
                </div>
                <div className="first-section-right">
                    <div className="background-container">
                    </div>
                    <div className="image-container">
                        <img src={IllustrationHero} alt="illustration-hero" className='illustration-hero' />
                    </div>

                </div>
            </section>
            <section className='second-section'>
                <h2>Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur amet eligendi fugiat adipisci dolor at, quaerat nobis fugit assumenda aliquid quos pariatur necessitatibus consequatur dolore accusantium qui officia non quisquam!</p>
                <div className="container-for-tab-section">
                    <span>Simple Bookmarking</span>
                    <span>Speedy Searching</span>
                    <span>Easy Sharing</span>
                </div>
                <div className="second-section-inner-container">
                    <div className="left-inner-container">
                        <div className="container-for-background"></div>
                        <div className="container-for-image">
                            <img src={IllustrationHero} alt="illustration-hero-2" className='illustration-hero-2' />
                        </div>

                    </div>

                    <div className="right-inner-container">
                        <h2>Bookmark in one click</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi dolorem sunt ut, at labore praesentium eum alias consequuntur voluptatibus placeat soluta quo officia perferendis aliquam ea voluptatem amet dolore?</p>
                        <Button buttonText={"More Info"} backgroundColor={"hsl(231, 69%, 60%)"} color={"white"} />
                    </div>
                </div>
            </section>
            <section className='third-section'>
                <h2>Download the extension</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam sed ex nobis. Aliquid deserunt id autem nostrum illum culpa ipsam maiores quos earum reprehenderit et, facere iste porro consequatur.</p>
                <div className="container-for-cards">
                    <Card browserName={"Chrome"} browserVersion={42} icon={ChromeIcon} />
                    <Card browserName={"Firefox"} browserVersion={55} icon={FireFoxIcon} position={"relative"} positionTop={"50px"} />
                    <Card browserName={"Opera"} browserVersion={46} icon={OperaIcon} position={"relative"} positionTop={"100px"} />
                </div>
            </section>
            <section className='fourth-section'>
                <div className="fourth-section-inner-container">
                    <h2>Frequently Asked Questions</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sit quas expedita, soluta assumenda esse pariatur minus quia dignissimos nisi quasi. Nisi omnis natus voluptatum placeat soluta ipsum pariatur dolores?</p>
                    <hr />
                    <Question ArrowIcon={ArrowDown} question={"What is Bookmark"} />
                    <Question ArrowIcon={ArrowDown} question={"How can i request a new browser"} />
                    <Question ArrowIcon={ArrowDown} question={"is there a mobile app"} />
                    <Question ArrowIcon={ArrowDown} question={"What about other Chromium browsers"} />

                    <Button buttonText={"More Info"} backgroundColor={"hsl(231, 69%, 60%)"} color={"white"} />
                </div>


            </section>
        </main>
    )
}

export default Main