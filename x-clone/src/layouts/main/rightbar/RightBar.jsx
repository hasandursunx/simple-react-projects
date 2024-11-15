import Premium from './Premium.jsx'
import Topics from './Topics/Topics.jsx'
import Search from './search/Search.jsx'
export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
        </aside>
    )
}
