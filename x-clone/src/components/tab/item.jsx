import { useTab } from "./context"
import classNames from 'classnames'

export default function Item({ children, id }) {
    const { active, setActive } = useTab();

    return (
        <button
            onClick={() => setActive(id)}
            type="button"
            className="flex-auto text-center hover:bg-[color:var(--background-secondary)] transition-colors">

            <div className={classNames(" h-[3.313rem] relative inline-flex items-center ", {
                "font-bold": active === id,
                "text-[color:var(--color-base-secondary)] font-medium": active !== id
            })}>
                {children}
                {active === id && (
                    <div className="h-[4px] absolute bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)]" />
                )}
            </div>
        </button>
    )
}

