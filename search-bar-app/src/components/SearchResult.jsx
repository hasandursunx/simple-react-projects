import React from 'react'

function SearchResult({ result }) {
    return (
        <div className='w-full bg-[#2f3134] flex flex-col shadow-lg
         rounded-lg mt-4 max-h-[300px] overflow-y-scroll px-3
         scroll scrollbar-thumb-slate-400 scrollbar-track-slate-600'>
            {
                result.map((result, index) => {
                    return (
                        <div key={index} >
                            <p className='text-white text-lg mt-1 cursor-pointer hover:bg-gray-700 py-2'>{result.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchResult