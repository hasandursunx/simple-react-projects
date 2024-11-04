import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GifState } from "../context/GifContext";


const Category = () => {
    const [results, setResults] = useState([]);

    const { category } = useParams();

    const { gf } = GifState();

    const fetchResults = async () => {
        const { data } = await gf.gifs(category, category);

        setResults(data);
    }

    useEffect(() => { fetchResults(); }, [category])

    return (
        <div className="flex flex-col sm:flex-row gap-5 my-4">
            <div className="w-full sm:w-72">
                {results.length > 0 && <Gif gif={results[0]} hover={false} />}
                <span className="text-gray-400 text-sm pt-2">
                    Don't tell it to me, GIF it to me!
                </span>
            </div>
        </div>
    )
}

export default Category