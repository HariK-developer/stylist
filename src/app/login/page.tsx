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
      <div className="mr-12">
        <div className="min-h-[560px] min-w-[360px]  rounded-[20px] border border-slate-300 shadow-lg shadow-slate-700">
          <div className="flex flex-col  ml-8 mr-8">
            <p className="text-white font-noto text-2xl mb-1">Login</p>
            <p className="text-white text-xs font-notoMedium mb-2">Glad you are back.!</p>
            <input className=" font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 mb-3 placeholder:text-white px-2" type="text" placeholder="Username"  />
            <input className="font-notoRegular bg-transparent border border-slate-300 rounded-[12px] h-9 placeholder:text-white px-2 mb-2" type="text" placeholder="Password" />
            <div className="flex mb-2 ">
              <input type="checkbox" /> <p className="text-white font-notoMedium text-xs ml-1">Remember me</p>
            </div>
            <button className="text-white font-noto">Login</button>
            <button className="text-white font-notoMedium text-xs">Forgot password ?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
