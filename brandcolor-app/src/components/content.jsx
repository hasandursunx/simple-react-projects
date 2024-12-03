import Search from "./search"
import Brand from "./brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from 'react-lazyload';

const Content = () => {
    const { brands } = useContext(MainContext);
    return (
        <main className="flex-1 overflow-auto bg-gray-100 ">
            <header className="flex h-16 border-b border-[#ccc] sticky top-0">
                <Search />
            </header>
            <section className="p-6" >
                {
                    brands.map((brand, index) => (
                        <LazyLoad key={brand.slug} once={true} overflow={true} placeholder="Loading...">
                            <Brand brand={brand} key={index} />
                        </LazyLoad>
                    ))
                }
            </section>
        </main>
    )
}

export default Content