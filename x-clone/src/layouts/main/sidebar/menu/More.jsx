import { Popover, PopoverButton, PopoverPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { setModal } from '../../../../store/modal/actions'
export default function More() {
    return (
        <Popover className="relative text-[color:var(--color-base)]">
            <PopoverButton className="py-1 block group outline-none " >
                <div className="pl-2 py-2    2 rounded-full inline-flex items-center gap-5 transition-colors group-hover:bg-[color:var(--background-third)]">
                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path fill="currentColor" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl ">
                        Daha fazla
                    </div>
                </div>
            </PopoverButton>
            <PopoverPanel className="rounded-xl w-[318px]  absolute bottom-0 left-0 bg-[color:var(--background-primary)] shadow-box overflow-hidden">
                <Link to='/lists' className="p-4 h-14 w-full  inline-flex items-center gap-5 transition-colors  hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path fill="currentColor" d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z" />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Listeler
                    </div>
                </Link>
                <Link to='/bookmarks' className="px-4 h-14 w-full  inline-flex items-center gap-5 transition-colors  hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path fill="currentColor" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Yer işaretleri
                    </div>
                </Link>
                <div className='h-px bg-[color:var(--background-third)] my-0.5 w-[89%] mx-auto' />
                <Disclosure>
                    {({ open }) => (
                        <>
                            <DisclosureButton className=" w-full py-2 h-[52px] flex items-center justify-between px-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                                İçerik Üreticisi Stüdyosu
                                <svg viewBox="0 -960 960 960" className={classNames("size-[18.75px]", {
                                    "rotate-180 text-[color:var(--color-primary)]": open
                                })} >
                                    <path
                                        fill="currentColor"
                                        d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
                                </svg>
                            </DisclosureButton>
                            <DisclosurePanel>
                                <Link to="/" className='flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)] transition-colors'>
                                    <svg className='size-[18.75px]' viewBox="0 -960 960 960" fill="currentColor"><path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" /></svg>
                                    İstatistikler
                                </Link>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <DisclosureButton className=" w-full py-2 h-[52px] flex items-center justify-between px-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                                Profesyonel Araçlar
                                <svg viewBox="0 -960 960 960" className={classNames("size-[18.75px]", {
                                    "rotate-180 text-[color:var(--color-primary)]": open
                                })}
                                >
                                    <path
                                        fill='currentColor'
                                        d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
                                </svg>
                            </DisclosureButton>
                            <DisclosurePanel >
                                <Link to="/" className='flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)] transition-colors'>
                                    <svg className='size-[18.75px]' viewBox="0 -960 960 960" fill="currentColor"><path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56Zm-96 200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                                    Reklamlar
                                </Link>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <DisclosureButton className=" w-full py-2 h-[52px] flex items-center justify-between px-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                                Ayarlar ve Destek
                                <svg viewBox="0 -960 960 960" className={classNames("size-[18.75px]", {
                                    "rotate-180 text-[color:var(--color-primary)]": open
                                })}

                                >
                                    <path
                                        fill='currentColor'
                                        d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
                                </svg>
                            </DisclosureButton>
                            <DisclosurePanel >
                                <button
                                    onClick={() => setModal('appearance')}
                                    className='flex w-full items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)] transition-colors'>
                                    <svg className='size-[18.75px]' viewBox="0 -960 960 960" fill="currentColor"><path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56Zm-96 200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                                    Görünüm
                                </button>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            </PopoverPanel>
        </Popover>
    )
}