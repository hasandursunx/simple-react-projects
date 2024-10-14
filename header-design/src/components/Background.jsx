import video1 from '../assets/togg-t10x.mp4'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='h-full w-full float-left inset-0 p-0 fixed object-cover -z-[1]' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if (heroCount === 0) {
        return <img src={image1} className=' h-full w-full float-left inset-0 p-0 fixed object-cover -z-[1]' alt='' />
    }
    else if (heroCount === 1) {
        return <img src={image2} className='h-full w-full float-left inset-0 p-0 fixed object-cover -z-[1]' alt='' />
    }
    else if (heroCount === 2) {
        return <img src={image3} className=' h-full w-full float-left inset-0 p-0 fixed object-cover -z-[1]' alt='' />

    }
}
export default Background