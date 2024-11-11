import Logo from "./logo/Logo"
import Menu from "./menu/Menu"

const Sidebar = () => {
    return (
        <aside className="w-[275px] min-h-screen pr-2">
            <Logo />
            <Menu />
        </aside>
    )
}

export default Sidebar
