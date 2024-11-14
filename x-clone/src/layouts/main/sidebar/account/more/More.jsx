import classNames from "classnames";
import { useAccount, useAccounts } from "../../../../../store/auth/hooks"
import { setCurrentAccount } from "../../../../../store/auth/actions";
export default function More({ close }) {
    const currentAccount = useAccount();
    const accounts = useAccounts();


    return (
        <div >
            {accounts.map(account => (
                <button
                    type="button"
                    disabled={currentAccount.id == account.id}
                    onClick={() => {
                        setCurrentAccount(account)
                        close()
                    }}
                    className={classNames(" py-3 px-4 flex items-center text-left w-full transition-colors", {
                        "hover:bg-[#eff3f41a]": currentAccount.id !== account.id
                    })}>
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 flex-1 text-[15px]">
                        <h6 className="font-bold leading-5 "> {account.fullname}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                    {account.id === currentAccount.id && (
                        <svg className="ml-3 mr-2" viewBox="0 -960 960 960" width={18.75} height={18.75} fill="#00ba7c">
                            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                    )}
                </button>
            ))}
            <div className="h-px bg-[#2f3366] my-3" />
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold text-[#e7e9ea] leading-5">
                Var olan bir hesap ekle
            </button>
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full  font-bold text-[#e7e9ea] leading-5">
                Hesapları yönet
            </button>
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold text-[#e7e9ea] leading-5">
                <div className="max-w-[200px]">
                    @hasanxyz hesabından çıkış yap.
                </div>
            </button>
        </div>
    )
}
