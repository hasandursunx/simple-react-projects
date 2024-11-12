import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
export default function More() {
    return (
        <Popover className="relative">
            <PopoverButton className="py-1 block group outline-none" >
                <div className="p-3 rounded-full inline-flex items-center gap-5 transition-colors  group-hover:bg-[#eff3f41a]">
                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path fill="#e7e9ea" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl ">
                        Daha fazla
                    </div>
                </div>
            </PopoverButton>
            <PopoverPanel className="rounded-xl w-[318px] absolute bottom-0 left-0 bg-black shadow-box overflow-hidden">
                <button className="p-3 h-14 w-full  inline-flex items-center gap-5 transition-colors  hover:bg-[#eff3f41a]">
                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path fill="#e7e9ea" d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z" />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl ">
                        Listeler
                    </div>
                </button>
            </PopoverPanel>
        </Popover>
    )
}