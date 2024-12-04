import MainContext from "../MainContext"
import { useContext, useEffect, useState } from "react"
import { GrLink, GrDownload, GrClose } from "react-icons/gr";
import { Link } from "react-router";

const Download = () => {
    const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
    const [downloadUrl, setDownloadUrl] = useState();
    const [cssMethod, setCssMethod] = useState('css');


    useEffect(() => {
        if (selectedBrands.length > 0) {
            let output = '';

            switch (cssMethod) {
                case 'css':
                    output += 'root:{\n';
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug = slug);
                        brand.colors.map((color, key) => {
                            output += `--${slug}-${key}: #${color};\n`
                        });
                    });
                    output += '}'
                    break;

                case 'scss':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug = slug);
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-${key}: #${color};\n`
                        })
                    })
                    break;
                case 'less':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug = slug);
                        brand.colors.map((color, key) => {
                            output += `@${slug}-${key}: #${color};\n`
                        })
                    })

                    break;
                default:
                    break;
            }


            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
            return () => {
                URL.revokeObjectURL(url);
                setDownloadUrl('');
            };
        }
    }, [selectedBrands, cssMethod])


    return (
        <div className="pr-6 flex items-center ">
            <div className="flex  mr-4">
                <select className="cursor-pointer h-7 mx-2 px-2 appearance-none rounded-md text-center " onChange={(e) => setCssMethod(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
                <a download={`brands.${cssMethod}`} href={downloadUrl} className="w-7 h-7 bg-transparent flex items-center justify-center cursor-pointer">
                    <GrDownload />
                </a>
                <Link to={`/collection/${selectedBrands.join(',')}`}>
                    <GrLink />
                </Link>
            </div>
            <div
                onClick={() => setSelectedBrands('')}
                className="font-medium text-sm text-[#999] flex items-center">
                <GrClose className="bg-transparent mr-1.5 cursor-pointer"></GrClose>
                {selectedBrands.length} brands selected.
            </div>
        </div >
    )
}

export default Download