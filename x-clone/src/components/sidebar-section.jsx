import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

export default function SidebarSection({ title, more, children }) {
    return (
        <section className="bg-[#16181c] mb-4 overflow-hidden rounded-2xl border border-[#16181c]">
            <h5 className="py-3 px-4  text-xl font-extrabold leading-6 h-12 flex items-center text-[#e7e9ea]">{title}</h5>
            <div className="grid">
                {children}
            </div>
            {
                more && (
                    <Link
                        to={more}
                        className='h-[52px]  px-4 flex items-center  text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]'
                    >
                        Daha Fazla Göster
                    </Link>
                )
            }
        </section>
    )
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])

}

SidebarSection.defaultProps = {
    more: false
}