import React, { useState } from 'react';
import { back, line, cup, night, sun } from '../util';

function SignIn() {
  const [modeActive, setModeActive] = useState(false);
  const [loginMode, setLoginMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Toggle between light and dark mode
  const ModeChange = () => {
    setModeActive(!modeActive);
  };

  // Toggle between login and register modes
  const SignUpRegisterChange = () => {
    setLoginMode(!loginMode);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] flex"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Left panel with mode switcher and form */}
        <div className="w-[40vw] h-[100vh] p-5 font-alegreya-sans-sc text-lg">
          {/* Light/Dark mode toggle switch */}
          <div
            className="w-[6rem] relative h-[2rem] bg-[#D9D9D9] bg-opacity-40 rounded-full"
            onClick={ModeChange}
          >
            <div
              className={`w-[3rem] py-1 px-3 absolute left-0 top-0 bg-opacity-30 h-full rounded-full transition-transform duration-300 ${
                modeActive ? 'bg-white bg-opacity-50' : 'bg-[#D9D9D9]'
              } ease-in-out ${modeActive ? 'translate-x-[3rem]' : ''}`}
            >
              <img className="w-[1.5rem]" src={modeActive ? sun : night} alt="" />
            </div>
          </div>

          <div className="w-[40vw] h-[6vh]"></div>

          {/* Form Section */}
          <div className="w-[40vw] h-[80vh] flex gap-[3rem] flex-col justify-center items-center">
            {/* Sign In / Register switcher */}
            <div
              className="w-[30vw] relative h-[3.5rem] bg-[#D9D9D9] bg-opacity-40 rounded-full transition-all duration-300 ease-in-out"
              onClick={SignUpRegisterChange}
            >
              <div
                className={`w-[15vw] flex justify-center items-center absolute font-bold text-2xl left-0 top-0 h-full rounded-full transition-transform duration-300 ease-in-out ${
                  loginMode ? 'bg-[#D9D9D9] translate-x-[15vw] text-black' : 'bg-[#BB0101] text-white'
                }`}
              >
                <h1>{loginMode ? 'register' : 'sign in'}</h1>
              </div>
              <div className="flex justify-between p-3">
                <h1 className="px-[4rem] text-2xl text-white font-bold">sign in</h1>
                <h1 className="px-[4rem] text-2xl text-white font-bold">register</h1>
              </div>
            </div>

            {/* Input fields */}
            <div
              className={`flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
                loginMode ? 'gap-6 opacity-100' : 'gap-3 opacity-100'
              }`}
            >
              {/* Render Username field only in register mode */}
              {loginMode && (
                <input
                  className="w-[30vw] h-[3.5rem] p-4 rounded-full border-2 border-zinc-500 bg-transparent transition-opacity duration-500 ease-in-out placeholder:text-gray-400 placeholder:italic placeholder:font-alegreya-sans-sc placeholder:text-sm text-base text-white font-alegreya-sans-sc"
                  type="text"
                  placeholder="Username"
                />
              )}
              <input
                className="w-[30vw] h-[3.5rem] p-4 rounded-full border-2 border-zinc-500 bg-transparent transition-opacity duration-500 ease-in-out placeholder:text-gray-400 placeholder:italic placeholder:font-alegreya-sans-sc placeholder:text-sm text-base text-white font-alegreya-sans-sc"
                type="text"
                placeholder="Email"
              />
              
              {/* Password field with "show/hide" toggle */}
              <div className="relative w-[30vw]">
                <input
                  className="w-full h-[3.5rem] p-4 rounded-full border-2 border-zinc-500 bg-transparent transition-opacity duration-500 ease-in-out placeholder:text-gray-400 placeholder:italic placeholder:font-alegreya-sans-sc placeholder:text-sm text-base text-white font-alegreya-sans-sc"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-white"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              {/* Sign Up Button */}
              <div className='w-[30vw] flex justify-end'>
              <button
                className={`w-[10vw] h-[3.5rem]  ${loginMode?"bg-[#BB0101] text-white":"bg-[#D9D9D9] text-black"}  text-xl font-bold  rounded-full mt-6`}
              >
                {loginMode ? 'Sign Up' : 'Sign In'}
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel with welcome message */}
        <div className="w-[60vw] h-[100vh] p-5">
          {/* Line image in the top right */}
          <div className="flex w-[57vw] justify-end items-center">
            <img className="w-[6rem]" src={line} alt="" />
          </div>

          <div className="h-[30vh]"></div>

          {/* Welcome message */}
          <div className="w-[58vw] flex-col px-[10rem] items-center font-alegreya-sans-sc text-lg">
            <div className="flex gap-6">
              <img className="w-[4rem]" src={cup} alt="" />
              <h1 className="font-bold text-white text-6xl">Welcome !!</h1>
            </div>

            {/* Account prompt */}
            <div className="flex my-10 justify-between ">
              <span className='relative group'>
              <h1 className="text-white text-2xl">Don't have an account?</h1>
              <span className="absolute left-0 bottom-0 h-1 w-full bg-white transition-all duration-300 ease-in-out transform scale-x-100 group-hover:scale-x-50" />
              
              </span>
              
              
              <span className="relative group">
                <h1 className="text-white text-2xl mb-2 font-alegreya-sans-sc  cursor-pointer">sign up</h1>
                <span className="absolute left-0 bottom-0 h-1 w-full bg-white transition-all duration-300 ease-in-out transform scale-x-100 group-hover:scale-x-50" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
