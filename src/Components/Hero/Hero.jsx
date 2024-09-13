
import hero from '../../assets/hero.png';
import ell from '../../assets/Ellipse.png';
import ell2 from '../../assets/Ellipse-1.png';
import rightEll from '../../assets/RightEllipse.png';
import downEll from '../../assets/DownEllipse.png';

function Hero() {
    return (
        <div className="px-48 min-h-screen py-14">

            <div className="flex items-center">

                <div className="w-1/2">
                    <p className='text-subTextColor font-bold'>نحوّل رؤيتك إلى نجاح</p>
                    <h2 className='text-5xl font-extrabold leading-normal mt-2'>
                        نحقق لك  <span className='relative z-10 '>النمو
                            <img src={ell} className='absolute -z-10 inset-0 scale-150 mt-3 mr-1 -rotate-12' alt="" />
                            <img src={ell2} className='absolute -z-10 inset-0 scale-150 mt-3 mr-1 rotate-12' alt="" />
                        </span> <br />
                        والتميز في عالم
                        التسويق
                    </h2>
                    <p className='mt-3 text-lg text-gray-600'>
                        نساعدك على الوصول إلى جمهورك المستهدف  <br />وتحقيق أهدافك بسرعة وكفاءة.
                    </p>
                    <button className='bg-theme hover:bg-themeHovered text-white px-10 text-lg py-3 mt-4 rounded-2xl'>
                        استشارة مجانيه
                    </button>

                </div>
                <div className="w-2/3 relative">
                    <img src={hero} className='relative z-10' alt="" />
                    <img src={downEll} className='absolute top-1/3 w-20' alt="" />
                    <img src={rightEll} className='absolute bottom-1/4 left-0 w-24' alt="" />
                </div>
            </div>


        </div>
    )
}

export default Hero