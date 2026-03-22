import { Carousel } from 'antd';
import Carousel1img from '../../assets/Carousel1img.png'
import Carousel2img from '../../assets/Carousel2img.png'
import Carousel3img from '../../assets/Carousel3img.png'
import Carousel4img from '../../assets/Carousel4img.png'
import Carousel5img from '../../assets/Carousel5img.png'
import Carousel6img from '../../assets/Carousel6img.png'
import Carousel7img from '../../assets/Carousel7img.png'
import Carousel8img from '../../assets/Carousel8img.png'

export const Carousel1 = () => {
    return (
        <>
            <div className='flex gap-x-2 mb-10 max-md:flex-col max-md:gap-y-5'>
                <div className='w-[50%] max-md:w-full'>
                    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>

                        <div>
                            <img src={Carousel1img} className='rounded-2xl' />
                        </div>

                        <div>
                            <img src={Carousel2img} className='rounded-2xl' />
                        </div>

                        <div>
                            <img src={Carousel3img} className='rounded-2xl' />
                        </div>

                        <div>
                            <img src={Carousel4img} className='rounded-2xl' />
                        </div>

                        <div>
                            <img src={Carousel5img} className='rounded-2xl' />
                        </div>

                        <div>
                            <img src={Carousel6img} className='rounded-2xl' />
                        </div>
                    </Carousel>
                </div>

                <div className='w-[50%] flex gap-x-2 max-md:w-full max-sm:hidden'>
                    <div className='w-full'>
                        <img src={Carousel7img} className='rounded-2xl' />
                    </div>

                    <div className='w-full'>
                        <img src={Carousel8img} className='rounded-2xl' />
                    </div>
                </div>
            </div>
        </>
    )
}