import React from 'react'
const Question = ({question, ArrowIcon}) => {
    return (
        <>
            <div className="question-container">
                <p>{question}?</p>
                <img src={ArrowIcon} alt="arrow-down" className='arrow-down' />
            </div>
            <hr />
        </>
    )
}

export default Question