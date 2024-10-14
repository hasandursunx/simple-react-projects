
const Navbar = () => {
    return (
        <div className=" bg-black/75 flex justify-between items-center py-3 px-6 mx-16 my-4 rounded-md text-white">
            <div className=" text-4xl font-medium" >TOGG - T10X</div>
            <ul className="flex items-center list-none text-lg gap-16">
                <li >ANASAYFA</li>
                <li className=" rounded-[40px] px-9 py-2 bg-white text-[#262626]">KEŞFET</li>
                <li>HAKKIMIZDA</li>
                <li>İLETİŞİM</li>
            </ul>
        </div>

    )
}

export default Navbar