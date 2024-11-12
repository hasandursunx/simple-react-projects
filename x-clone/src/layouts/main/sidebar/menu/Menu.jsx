import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/consts";
import Button from "../../../../components/Button";
import More from "./More";
import New from "./New";
const Menu = () => {
    return (
        <nav className=" mb-1">
            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className="py-[3px] block group" >
                    {({ isActive }) => (
                        <div className={
                            classNames("p-2 rounded-full inline-flex items-center gap-5 transition-colors  group-hover:bg-[#eff3f41a]",
                                { "font-bold": isActive })}>
                            <div className="h-[26.25] w-[26.25] relative">
                                {menu?.notification && (
                                    <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -right-1 -top-1.5 flex items-center justify-center text-[11px] ">{menu?.notification}</span>
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