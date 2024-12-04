import { useContext, useEffect } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "../MainContext";
import Clipboard from 'react-clipboard.js';

const Brand = ({ brand }) => {
    const { setSelectedBrands, selectedBrands, setCopied } = useContext(MainContext)


    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug));
            console.log(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug]);
            console.log([...selectedBrands, brand.slug])
        }
    }
    const setColor = (color) => {
        setCopied(color)
    }



    return (
        <div
            className={`border border-[#ddd] bg-white p-4 mb-2.5 
        ${selectedBrands.includes(brand.slug) ? 'border-red-400' : ''} `}>
            <h5 onClick={toggleSelected} className="text-lg mb-2.5 font-semibold cursor-pointer">{brand.title}</h5>
            <div className="flex">
                {brand.colors.map((color, index) => (
                    <Clipboard data-clipboard-text={color}
                        onSuccess={() => setColor(color)}
                        className={`bg-[color:var(--bgColor)] text-[color:var(--text-color)] transition-all
                        h-10 w-10 flex items-center justify-center text-sm font-medium   overflow-hidden
                        ${selectedBrands.includes(brand.slug) ? 'indent-0 flex-1' : '-indent-52'}
                        `}
                        style={{ '--bgColor': `#${color}`, '--text-color': `${getContrastYIQ(color)}` }}
                        key={index}>
                        {color}
                    </Clipboard>
                ))}
            </div>
        </div >
    )
}

export default Brand