import Logo from "./logo/Logo"
import Menu from "./menu/Menu"
import Account from "./account/Account"

const Sidebar = () => {
    return (
        <aside className="w-[275px] max-h-screen  min-h-screen pr-2 flex flex-col sticky top-0">
            <Logo />
            <Menu />
            <Account />
        </aside>
    )
}

export default Sidebar
