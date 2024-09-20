import Image from 'next/image'
import Link from 'next/link';

export default function Login() {
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
      <div className="mr-12 relative">
        <div className="min-h-[560px] min-w-[360px]  rounded-[20px] border border-slate-300 shadow-lg shadow-slate-700 relative  z-10 overflow-hidden" style={{
          background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), transparent, transparent, rgba(0, 0, 0, 0.5))',
        }}>
          <div className="flex flex-col  ml-8 mr-8 mt-20">
            <p className="text-white font-noto text-2xl mb-1">Login</p>
            <p className="text-white text-xs font-notoMedium mb-2">Glad you are back.!</p>
            <input className="text-white font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 mb-3 placeholder:text-white px-2" type="text" placeholder="Username" />
            <input className="text-white font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 placeholder:text-white px-2 mb-2" type="text" placeholder="Password" />
            <div className="flex mb-4 ">
              <input type="checkbox" /> <p className="text-white font-notoMedium text-xs ml-1">Remember me</p>
            </div>
            <button className="text-white font-noto bg-gradient-to-r from-[#628EFF] via-[#8740CD] to-[#580475]  h-10 rounded-xl mb-2"><Link className='flex block w-full h-full items-center justify-center' href="/home">Login</Link></button>
            <button className="text-white font-notoMedium text-xs mb-8 cursor-pointer"><Link href="/forgot-password">Forgot Password</Link></button>
            <div className="flex items-center mb-2">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-gray-500 font-notoMedium">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-16">
              <Image className='cursor-pointer' src={`assets/login/google.svg`} alt='google' width={30} height={30}></Image>
              <Image className='cursor-pointer' src={`assets/login/facebook.svg`} alt='facebook' width={30} height={30}></Image>
              <Image className='cursor-pointer' src={`assets/login/X.svg`} alt='X' width={30} height={30}></Image>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-white text-sm">
                Don&apos;t have an account? <a href="/sign-up" className="text-white">Sign Up</a>
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
          <div className='bg-gradient-to-b from-[#530061] from-0%  to-[#0D0A30] to-100% h-52 w-52 rounded-full'></div>
        </div>
        <div className='absolute bottom-[-60px] right-[-30px]'>
          <div className='bg-gradient-to-b from-[#300061] from-0%  to-[#0A1030] h-36 w-36 rounded-full'></div>
        </div>
      </div>
    </div>
  );
}
