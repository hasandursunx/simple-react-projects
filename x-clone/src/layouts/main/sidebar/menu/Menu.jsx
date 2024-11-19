import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/consts";
import Button from "../../../../components/Button";
import More from "./More";
import New from "./New";
import { useAccount } from '../../../../store/auth/hooks'
const Menu = () => {
    const account = useAccount()
    return (
        <nav className=" mb-1" key={account}>
            {mainMenu.map((menu, index) => (
                <NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path} className="py-[3px] block group" >
                    {({ isActive }) => (
                        <div className={
                            classNames("p-2 rounded-full inline-flex items-center gap-5 transition-colors   group-hover:bg-[color:var(--background-third)]",
                                { "font-bold": isActive })}>
                            <div className="h-[26.25] w-[26.25] relative">
                                {menu?.notification && (
                                    <span className="w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-[color:var(--background-primary)] border border-[color:var(--background-primary)] absolute -right-1 -top-1.5 flex items-center justify-center text-[11px] ">{menu?.notification}</span>
                                )}
                                {isActive && menu.icon.active}
                                {!isActive && menu.icon.passive}
                            </div>
                            <div className="pr-4 text-xl ">
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))
            }
            <More />
            <New />

        </nav >
    )
}

export default Menu