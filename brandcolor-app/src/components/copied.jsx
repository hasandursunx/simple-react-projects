import { motion } from "motion/react"
import { getContrastYIQ } from "../helpers"

const Copied = ({ color }) => {
    return (
        <motion.div
            initial={{ y: "40px" }}
            animate={{ y: "-20px" }}
            className="fixed bottom-5  right-5 text-[color:var(--text-color)] bg-[color:var(--bgColor)] py-4 px-6 rounded-md text-lg"
            style={{
                '--bgColor': `#${color}`, '--text-color': `${getContrastYIQ(color)}`
            }}
        >
            Copied #{color} to clipboard.
        </motion.div>
    )
}

export default Copied