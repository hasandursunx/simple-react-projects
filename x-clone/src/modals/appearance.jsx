import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { useAppearance } from '../store/appearance/hooks'
import classNames from 'classnames';
import { setBackgroundColor, setBoxShadow, setColor } from '../store/appearance/actions'

export default function AppearanceModal({ close }) {
    const { backgroundColor, color } = useAppearance();
    console.log(color)
    return (
        <div className="w-[600px]">
            <h3 className="mt-8 mb-3 text-[23px] leading-7 font-extralight text-center">Görünümü özelleştir.</h3>
            <div className="p-8 pt-0 ">
                <p className="text-center text-[#71767b] text-[15px] leading-5 mb-5">
                    Bu ayarlar bu tarayıcıdaki tüm x hesaplarını etkiler.
                </p>
                <div className="mx-8 mb-4">
                    <div className="border border-[color:var(--background-third)] px-4 flex py-3 gap-3 rounded-2xl">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_x96.jpg" alt=""
                        />
                        <div className="flex-1 flex flex-col">
                            <header className="mb-0.5 leading-5 text-[15px] flex items-center">
                                <div className=" font-bold flex items-center">
                                    X
                                    <svg viewBox="0 0 22 22" height={18.75} className="text-[#1d9bf0] ml-0.5">
                                        <path fill="currentColor" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" /></svg>
                                </div>
                                <div className="ml-1 flex items-center text-[] text-[#71767b]">
                                    @X . 22m
                                </div>
                            </header>
                            <div className='text-[15px] leading-5 text-[color:var(--color-base)]'>
                                X'in merkezinde, tıpku bunun gibi gönderi denen kısa mesajlar yatar. Gönderiler, fotoğraflar,videolari
                                bağlantılar, metinler, etiketler ve <Link className='text-[#1d9bf0] hover:underline' to="/x">@X</Link> gibi bahsetmeler içerebilir.
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className='text-[color:var(-color-base-secondary)] mb-1 leading-5 text-[13px] font-bold'>Arkaplan</h6>
                <div className='py-1 px-3 mb-3 grid grid-cols-3 gap-1 bg-[color:var(--background-secondary)]  rounded-2xl   '>
                    <button
                        onClick={() => {
                            setColor({
                                ...color,
                                base: '#0f1419',
                                baseSecondary: '#536471'
                            });
                            setBackgroundColor({
                                name: 'light',
                                primary: '#fff',
                                secondary: '#f7f9f9',
                                third: '#eff3f4',
                                modal: '#00000066'
                            })
                            setBoxShadow('rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px')

                        }}
                        className={classNames('h-16 px-5 rounded  bg-white text-[#0f1419] font-bold border  border-white/10', {
                            "!border-[color:var(--color-primary)]": backgroundColor.name === "light"
                        })}>
                        Varsayılan
                    </button>
                    <button
                        onClick={() => {
                            setColor({
                                ...color,
                                base: '#f9f9f9',
                                baseSecondary: '#8b98a5'
                            })
                            setBackgroundColor({
                                name: 'dark',
                                primary: '#15202b',
                                secondary: '#1e2732',
                                third: '#263340',
                                modal: '#5b708366'
                            })
                            setBoxShadow('rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px')

                        }}
                        className={classNames('h-16 px-5 rounded  bg-[#152025] text-[#f7f9f9] font-bold border border-white/10', {
                            "!border-[color:var(--color-primary)]": backgroundColor.name === "dark"
                        })}>
                        Loş
                    </button>
                    <button
                        onClick={() => {
                            setColor({
                                ...color,
                                base: '#e7e9ea',
                                baseSecondary: '#71767b'
                            })
                            setBackgroundColor({
                                name: 'darker',
                                primary: '#000',
                                secondary: '#16181c',
                                third: '#273340',
                                modal: '#5b708366'
                            })
                            setBoxShadow('rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px')
                        }}
                        className={classNames('h-16 px-5  bg-black rounded text-[#f7f9f9] font-bold border border-white/10 ',
                            {
                                "!border-[color:var(--color-primary)]": backgroundColor.name === "darker"
                            }
                        )}>


                        Işıklar Kapalı
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <Button onClick={close} className='flex items-center justify-center'>
                        Bitti
                    </Button>

                </div>
            </div>
        </div>
    )
}