import PropTypes from "prop-types"
import Item from "./item"
export default function Items({ children, id }) {
    return (
        <div className="flex ">
            {children}
        </div>
    )
}

Item.PropTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.string
}
