import React from 'react'
import './question.css'
const Question = ({question, ArrowIcon}) => {
    return (
        <div>
            <div className="question-container">
                <p>{question}?</p>
                <img src={ArrowIcon} alt="arrow-down" className='arrow-down' />
            </div>
            <hr />
        </div>
    )
}

export default Question