import React from 'react'

const Question = ({ question, onAnswerClick = () => { } }) => {
    return (
        <div className='question'>
            <h2>{question.question}</h2>
            <ul className='options'>
                {question.answersOptions.map((option) => {
                    return <li key={option.key} >
                        <button onClick={
                            () => onAnswerClick(option.iscorrect)
                        }>{option.text}</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Question