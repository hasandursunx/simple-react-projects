import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

export default function SidebarSection({ title, more, children }) {
    return (
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
            <h5 className="py-3 px-4  text-xl font-extrabold leading-6 h-12 flex items-center ">{title}</h5>
            <div className="grid">
                {children}
            </div>
            {
                more && (
                    <Link
                        to={more}
                        className='h-[52px] rounded-b-2xl  px-4 flex items-center  text-[15px] text-[color:var(--color-primary)] transition-colors hover:bg-white/[0.03]'
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