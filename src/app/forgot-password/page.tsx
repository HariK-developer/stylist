import Image from 'next/image'

export default function ForgotPassword() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen flex items-center">
      <div className="w-8/12 flex flex-col ml-12">
        <p className="font-semibold text-white text-8xl font-noto">
            No Worries.!!
        </p>
        <div className="w-60 h-[72px]  border-[3px] border-white flex items-center justify-center">
          <p className="text-white text-2xl font-notoSubFont">Take me back ?</p>
        </div>
      </div>
      <div className="mr-12 relative">
        <div className="min-h-[560px] min-w-[360px]  rounded-[20px] border border-slate-300 shadow-lg shadow-slate-700 relative  z-10 overflow-hidden" style={{
          background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), transparent, transparent, rgba(0, 0, 0, 0.5))',
        }}>
          <div className="flex flex-col  ml-8 mr-8 mt-20">
            <p className="text-white font-noto text-2xl mb-1">Forgot Password ?</p>
            <p className="text-white text-xs font-notoMedium mb-2">Please enter you&apos;re email</p>
            <input className="text-white font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 mb-3 placeholder:text-white px-2" type="email" placeholder="example@gmail.com" />
            <button className="text-white font-noto bg-gradient-to-r from-[#E948C5] via-[#CD407B] to-[#75042D]  h-10 rounded-xl mb-56">Reset Password</button>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-white text-sm">
              Don&apos;t have an account? <a href="sign-up" className="text-white">Sign Up</a>
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
          <Image src={`assets/forgot-password/ball_b.svg`} alt='top ball' height={200} width={200}></Image>
        </div>
        <div className='absolute bottom-[-60px] right-[-30px]'>
          <Image src={`assets/forgot-password/ball_s.svg`} alt='bottom ball' height={140} width={140}></Image>
        </div>
      </div>
    </div>
  );
}
