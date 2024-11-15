import { topics } from '../../../../utils/consts'
import Topic from './Topic/Topic'
export default function Topics() {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
            <h5 className="py-3 px-4  text-xl font-extrabold leading-6 h-12 flex items-center text-[#e7e9ea]">İlgini çekebilecek gündemler</h5>
            <nav className='grid'>
                {topics.map((topic, index) => (
                    <Topic item={topic} key={index} />
                ))}
            </nav>
        </section>
    )
}