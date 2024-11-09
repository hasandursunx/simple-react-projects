import React from 'react'

const Definitons = ({ word, category, meanings }) => {
    return (
        <div className='meanings'>
            <div className='audio-container'>
                {
                    meanings[0] && word && category === 'en' && (
                        <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                            className='audio'
                            controls
                        >
                            Your Browser doesn't support audio element.
                        </audio>
                    )
                }
            </div>
            {
                word === "" ? (
                    <span className='subTitle'> Start by typing a word in search</span>
                ) : (
                    meanings.map((mean) => (
                        mean.meanings.map((item) => (item.definitions.map((def) => (
                            <div className='singleMean'>
                                <b>{def.definition}</b>
                                <hr className='line' />
                                {def.example && (
                                    <span>
                                        <b>Example : </b>
                                        {def.example}
                                    </span>
                                )}
                            </div>
                        ))))
                    ))
                )
            }
        </div>
    )
}

export default Definitons
