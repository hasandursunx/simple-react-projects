import { GrSearch } from "react-icons/gr";

const Search = () => {


    return (
        <div className="flex-1 relative">
            <div className="absolute top-0 left-0 w-16 h-full flex items-center justify-center">
                <GrSearch className="size-5" />
            </div>
            <input className="w-full h-full text-base pl-14 pr-5 outline-none" type="text" placeholder='Search Brands' />
        </div>
    )
}

export default Search