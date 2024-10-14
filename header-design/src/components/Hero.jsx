import arrow_btn from '../assets/arrow.png'
import play_btn from '../assets/play-button.png'
import pause_btn from '../assets/pause-button.png'
const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
    return (
        <div >
            <div className=' px-14 pt-20'>
                <div className='text-white text-end leading-[8rem]  '>
                    <p className=' text-start  font-medium text-[65px] '>{heroData.text1}</p>

                    <p className=' mr-20 pt-[100px] text-[65px] '>{heroData.text2}</p>
                </div>
            </div>
            <div className='w-full flex justify-between absolute bottom-8 px-10 '>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center gap-12 w-fit py-1 px-2 pl-8 rounded-[60px] bg-white cursor-pointer'>
                        <p className='text-xl text-[#292929] font-medium '>Geleceği Keşfet</p>
                        <img className=' w-10' src={arrow_btn} />
                    </div>
                    <div className=' flex justify-between mt-5'>
                        <ul className='flex items-center gap-6 list-none'>
                            <li onClick={() => setHeroCount(0)}
                                className={`${heroCount === 0 ? "bg-orange-400" : ""} w-3 h-3 bg-white rounded-lg cursor-pointer`}></li>
                            <li onClick={() => setHeroCount(1)}
                                className={`${heroCount === 1 ? "bg-orange-400" : ""} w-3 h-3 bg-white rounded-lg cursor-pointer`} ></li>
                            <li onClick={() => setHeroCount(2)}
                                className={`${heroCount === 2 ? "bg-orange-400" : ""} w-3 h-3 bg-white rounded-lg cursor-pointer`} ></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pr-5 ">
                    <div className='w-32 flex justify-center'>
                        <img className=' cursor-pointer w-10 mb-3' onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_btn : play_btn} alt="" />
                    </div>
                    <p className='w-32 text-white text-center '>{playStatus ? "Videoyu Durdur" : "Videoyu izle"}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero