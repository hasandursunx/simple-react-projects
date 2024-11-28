import { useState } from "react"

export default function Poll({ poll: pollData }) {
    const [poll, setPoll] = useState(pollData)
    return (
        <div className="mt-3 grid gap-2">
            {!poll.voted && poll.answers.map((answer) =>
            (<button
                onClick={() => {
                    setPoll({
                        ...poll,
                        voted: true,
                        votes: poll.votes + 1,
                        answers: poll.answers.map(a => {
                            if (a.id === answer.id) {
                                return {
                                    ...a,
                                    votes: a.votes + 1,
                                    voted: true
                                }
                            }
                            return a
                        })
                    })
                }}
                key={answer.id}
                className="h-8 border border-[color:var(--color-primary)] rounded-full text-[color:var(--color-primary)] font-bold hover:bg-[color:var(--color-primary-alpha)] transition-colors">
                {answer.text}
            </button>)
            )}
            {poll.voted && poll.answers.map((answer) => (
                <div className="h-8 flex items-center justify-between relative overflow-hidden rounded-md px-2 z-[1]">
                    <div
                        style={{ width: ((answer.votes / poll.votes) * 100) + '%' }}
                        className="absolute top-0 left-0 h-full bg-[color:var(--color-base-secondary)] opacity-50 z-[-1]" />
                    <div className="flex items-center gap-0.5">
                        {answer.text}
                        {answer?.voted && (
                            <svg viewBox="0 -960 960 960" className="h-[1.25rem]">
                                <path fill="currentColor" d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        )}
                    </div>
                    <div>{((answer.votes / poll.votes) * 100).toFixed(1) + ' %'}</div>
                </div>
            ))
            }
            < div className="text-[color:var(--color-base-secondary)] mt-2">
                {poll.votes} oy &#183;  6 gün kaldı
            </div>
        </div >
    )
}