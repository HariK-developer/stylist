import Image from 'next/image'

export default function SignUp() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen flex items-center">
      <div className="w-8/12 flex flex-col ml-12">
        <p className="font-semibold text-white text-8xl font-noto">
            Roll the Carpet.!
        </p>
        <div className="w-60 h-[72px]  border-[3px] border-white flex items-center justify-center">
          <p className="text-white text-2xl font-notoSubFont">Skip the lag ?</p>
        </div>
      </div>
      <div className="mr-12 relative">
        <div className="min-h-[560px] min-w-[360px]  rounded-[20px] border border-slate-300 shadow-lg shadow-slate-700 relative  z-10 overflow-hidden" style={{
          background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), transparent, transparent, rgba(0, 0, 0, 0.5))',
        }}>
          <div className="flex flex-col  ml-8 mr-8 mt-20">
            <p className="text-white font-noto text-2xl mb-1">SignUp</p>
            <p className="text-white text-xs font-notoMedium mb-2">Just some details to get you in.!</p>
            <input className="text-white font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 mb-3 placeholder:text-white px-2" type="text" placeholder="Username" />
            <input className="text-white font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 mb-3 placeholder:text-white px-2" type="text" placeholder="Email / Phone" />
            <input  className="text-white font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 placeholder:text-white px-2 mb-2" type="text" placeholder="Password" />
            <input className="text-white font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 mb-3 placeholder:text-white px-2" type="text" placeholder="Confirm Password" />
            <button className="text-white font-noto bg-gradient-to-r from-[#2E4CEE] via-[#221EBF] to-[#040F75]  h-10 rounded-xl mb-2">SignUp</button>
            <div className="flex items-center mb-2">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-gray-500 font-notoMedium">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-14">
              <Image className='cursor-pointer' src={`assets/login/google.svg`} alt='google' width={30} height={30}></Image>
              <Image className='cursor-pointer' src={`assets/login/facebook.svg`} alt='facebook' width={30} height={30}></Image>
              <Image className='cursor-pointer' src={`assets/login/X.svg`} alt='X' width={30} height={30}></Image>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-white text-sm">
                Already Registered? <a href="/" className="text-white">Login</a>
              </p>
              <div className="flex space-x-4">
                <p className="text-white text-xs cursor-pointer">Terms & Conditions</p>
                <p className="text-white text-xs cursor-pointer">Support</p>
                <p className="text-white text-xs cursor-pointer">Customer Care</p>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-[-20px] left-[-100px] z-0'>
        <div className='bg-gradient-to-b from-[#190061] from-0%  to-[#0A1B30] to-100% h-52 w-52 rounded-full'></div>
        </div>
        <div className='absolute bottom-[-60px] right-[-30px]'>
        <div className='bg-gradient-to-b from-[#000F61] from-0%  to-[#0A1730] to-100% h-36 w-36 rounded-full'></div>
        </div>
      </div>
    </div>
  );
}
