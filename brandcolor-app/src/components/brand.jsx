
const Brand = ({ brand }) => {
    const c = 'ddd'
    return (
        <div className="border border-[#ddd] bg-white p-4 mb-2.5">
            <h5 className="text-lg mb-2.5 font-semibold">{brand.title}</h5>
            <div className="flex">
                {brand.colors.map((color, index) => (
                    <span
                        className="bg-[color:var(--bgColor)] flex-1 h-10 flex items-center justify-center text-sm font-medium"
                        style={{ '--bgColor': `#${color}` }}
                        key={index}>
                        {color}
                    </span>))}
            </div>
        </div >
    )
}

export default Brand