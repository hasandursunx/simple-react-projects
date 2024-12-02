import Search from "./search"
import BrandsData from '../brands.json'
import { useState } from "react";
import Brand from "./brand";
const Content = () => {

    const brandArray = []
    Object.keys(BrandsData).map(key => brandArray.push((BrandsData[key])));
    const [brands, setBrands] = useState(brandArray);
    console.log(brands)

    return (
        <main className="flex-1 overflow-auto bg-gray-100 ">
            <header className="flex h-16 border-b border-[#ccc] sticky top-0">
                <Search />
            </header>
            <section className="p-6" >
                {
                    brands.map((brand, index) => (
                        <Brand brand={brand} key={index} />
                    ))
                }
            </section>
        </main>
    )
}

export default Content