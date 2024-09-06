import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div className="bg-[#1E1E1E] min-h-screen flex items-center">
            <div className="w-8/12 flex flex-col ml-12">
                <p className="font-semibold text-white text-8xl font-noto">
                    Welcome Back .!
                </p>
                <div className="w-60 h-[72px]  border-[3px] border-white flex items-center justify-center">
                    <p className="text-white text-2xl font-notoSubFont">Skip the lag ?</p>
                </div>
            </div>
            <div className="mr-12">
                <div className="min-h-[500px] min-w-[400px]  rounded-[20px] border border-gray-600 shadow-lg shadow-slate-700">
                    <div className='flex flex-end'>
                    <FontAwesomeIcon color='white' width={10} height={10} icon={faCircleXmark} />
                    </div>
                </div>
            </div>
        </div>
    );
}
