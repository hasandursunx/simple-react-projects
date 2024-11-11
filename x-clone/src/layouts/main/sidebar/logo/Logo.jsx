import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div>
            <Link to="/" className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a]  transition-colors">
                <svg viewBox="0 0 512 512" width={30} height={30}>
                    <path fill="#fff"
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
            </Link>
        </div>
    )
}
