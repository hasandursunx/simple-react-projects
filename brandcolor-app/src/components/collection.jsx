import { useParams } from 'react-router'
import MainContext from '../MainContext';
import { useContext, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Download from "./Download";
import Brand from './brand';
import { Link } from "react-router";
import { GrLinkPrevious } from 'react-icons/gr';
import Loader from './loader';

const Collection = () => {
    const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext);
    const { slugs } = useParams();

    const clearSelectedBrands = () => {
        selectedBrands([]);
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
        console.log(selectedBrands)
    }, [])



    return (
        <main className="flex-1 overflow-auto bg-gray-100 ">
            <header className="flex h-16 border-b border-[#ccc] sticky top-0 justify-between bg-white">
                <Link to="/" onClick={clearSelectedBrands} className='bg-transparent flex text-xl items-center ml-5'>
                    <GrLinkPrevious className='block mr-2' />
                    All Brands
                </Link>
                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="p-6" >
                {
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug);
                        return (
                            <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader />}>
                                <Brand brand={brand} />
                            </LazyLoad>
                        )
                    })
                }
            </section>
        </main >
    )
}

export default Collection