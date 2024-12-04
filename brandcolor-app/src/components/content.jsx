import Search from "./search"
import Brand from "./brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from 'react-lazyload';
import Download from "./Download";
import Loader from "./loader";

const Content = () => {
    const { brands, selectedBrands } = useContext(MainContext);

    const rowRenderer = ({ key, index, style, isScrolling, isVisible }) => {
        // const content = isScrolling ? <Loader /> : <Brand brand={brands[index]}  />;
        return (
            <div style={style} key={key}>
                <Brand brand={brands[index]} />
            </div>
        )
    }
    return (
        <main className="flex-1 overflow-auto bg-gray-100">
            <header className="flex h-16 border-b border-[#ccc] sticky top-0 justify-between bg-white">
                <Search />
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="p-6" >
                {
                    brands.map(brand => (
                        <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader />}>
                            <Brand brand={brand} />
                        </LazyLoad>
                    ))
                }
            </section>
        </main>
    )

}

export default Content