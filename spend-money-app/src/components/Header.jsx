import { moneyFormat } from "../helpers"
function Header({ money, total }) {
    return (
        <>
            <div
                className="
               
                bg-gradient-to-b from-green-500 to-green-400
                w-full
                h-[60px]
                flex
                items-center
                justify-center
                text-white
                text-4xl
                sticky
                top-0
                
            ">
                {money - total > 0 &&
                    (<div>Harcayacak ${moneyFormat(money - total)} paranız kaldı.</div>)
                }
                {
                    money - total === 0 &&
                    (<div>Paranız tamamen bitmiştir.</div>)
                }
            </div>

        </>
    )
}

export default Header