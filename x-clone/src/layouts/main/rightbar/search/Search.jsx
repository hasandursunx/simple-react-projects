import { useState } from "react"
import { useClickAway } from 'react-use'
import { useRef } from 'react'
export default function Search() {
    const [query, setQuery] = useState('');
    const [focus, setFocus] = useState(false)
    const ref = useRef(null);
    useClickAway(ref, () => {
        setFocus(false)
    })
    return (
        <div ref={ref} className="min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 bg-[color:var(--background-primary)] z-[5]">
            <label className="h-[43px] rounded-full bg-[color:var(--background-third)] w-full relative group border border-transparent focus-within:bg-black focus-within:border-[#1d9bf0]">
                <div className="h-full flex items-center justify-center absolute top-0 left-2 pointer-events-none">
                    <svg viewBox="0 0 24 24" height={18.75} className=" min-w-[32px] text-[color:var(--color-base-secondary)] group-focus-within:text-[color:var(--color-primary)]" ><path fill="currentColor" d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" /></svg>
                </div>
                <input
                    value={query}
                    onFocus={() => setFocus(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Ara"
                    className=" w-full h-full bg-transparent outline-none   rounded-full pl-[56px] text-[15px]" />
                {(query && focus) && (
                    <button
                        type="button"
                        onClick={() => setQuery('')}
                        className="w-[22px] h-[22px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-black min-w-[22px] absolute top-1/2 right-3 -translate-y-1/2 ">
                        <svg viewBox="0 0 24 24" width={10} height={10}>
                            <path fill="currentColor" d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
                        </svg>
                    </button>
                )}


            </label>

            {focus && (
                <div className=" absolute w-[350px] top-full left-px -translate-y-1 bg-[color:var(--background-primary)] shadow-box max-h-[calc(80vh-53px)] rounded-lg text-center min-h-[100px]">
                    <p className="p-3 pt-5 text-[color:var(--color-base-secondary)] leading-5">
                        Kişileri , listeleri veya anahatar kelimeleri aramayı dene
                    </p>
                </div>
            )}
        </div>
    )
}

