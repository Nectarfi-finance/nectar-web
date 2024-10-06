import Image from 'next/image';
import React from 'react';

const NectarWorkflow = () => {
  return (
    <div className="bg-gray-900 px-8 text-white font-sans relative h-fit w-full">
      {/* <h1 className="text-5xl font-bold absolute top-8 left-8 z-10">How it works</h1> */}

      <div className='w-full h-[1200px] pb-[500px] relative  flex flex-col items-center justify-center'>
        <div className='relative w-full flex justify-center'>
          <div className='w-[400px] -ml-[700px] -mt-[100px]   bg-[#955F18] h-[400px] absolute rounded-full'>
          </div>
          <div className='w-[600px] bg-[#4A300C] h-[600px] z-40 -top-[300px] ml-[450px] rounded-full absolute'></div>
        </div>
        <div className='relative w-full flex justify-center'>
          <div className='w-[600px] bg-[#6F4712] h-[600px] absolute rounded-full mt-[120px] -ml-[200px]'></div>
          <div className='w-[350px] bg-[#DF8F24] h-[350px] ml-[500px] mt-[250px] rounded-full absolute'></div>
        </div>
        <div className=''>
          <div className='w-full h-[400] pt-[130px] z-50 absolute left-0 flex justify-center'>
            <div className=''>
              <div className='w-[800px] flex justify-between'>
                <div className='text-center w-[150px]'>
                  <h1 className='text-[50px]  font-extrabold text-[#4A300C]'>01</h1>
                  <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                </div>
                <div className='text-center w-[150px]'>
                  <h1 className='text-[50px]  font-extrabold text-[#955F18]'>03</h1>
                  <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                </div>
              </div>
              <div className='w-full flex justify-center '>
                <div className='w-[600px] mt-[170px] flex justify-between'>
                  <div className='text-center w-[150px]'>
                    <h1 className='text-[50px]  font-extrabold text-[#DF8F24]'>02</h1>
                    <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                  </div>
                  <div className='text-center w-[150px]'>
                    <h1 className='text-[50px]  font-extrabold text-[#4A300C]'>04</h1>
                    <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-[300] pt-[130px] z-50 absolute left-0 flex justify-center'>
            <div className=''>
              <div className='w-[800px] flex justify-between'>
                <div className='text-center w-[150px]'>
                  <h1 className='text-[50px]  font-extrabold text-[#4A300C]'>01</h1>
                  <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                </div>
                <div className='text-center w-[150px]'>
                  <h1 className='text-[50px]  font-extrabold text-[#955F18]'>03</h1>
                  <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                </div>
              </div>
              <div className='w-full flex justify-center '>
                <div className='w-[600px] mt-[170px] flex justify-between'>
                  <div className='text-center w-[150px]'>
                    <h1 className='text-[50px]  font-extrabold text-[#DF8F24]'>02</h1>
                    <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                  </div>
                  <div className='text-center w-[150px]'>
                    <h1 className='text-[50px]  font-extrabold text-[#4A300C]'>04</h1>
                    <h2 className='text-[20px] text-[#CCCCCC]'>Deposit Stablecoins</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='z-50 text-white flex justify-center -mt-[50px] flex-col items-center'>
          <h2 className='text-[60px] font-extrabold'>How it works </h2>
          <div className=''>
            <Image src="https://res.cloudinary.com/dcrvrdw9a/image/upload/v1728031042/nectafiImage_iun3hn.png" alt="jbb" width={500} height={500} className='w-[400px] z-50'/>
          </div>
          <div className='w-[300px] text-center'>
          <h2 className='text-[30px]'>Yield Optimization</h2>
          <p>Accumulated yield increases the tokens value over time</p>
          </div>
        </div>
      </div>

      {/* Background circles4
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-700 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-900 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-amber-600 rounded-full opacity-70" />
      
      {/* Numbered circles */}
      {/* <div className="absolute top-24 left-24 w-[180px] h-[180px] flex flex-col justify-center items-center">
        <span className="text-5xl font-bold">01</span>
        <span className="text-xl text-center mt-2">Deposit Stablecoins</span>
      </div>
      
      <div className="absolute bottom-32 left-32 w-[180px] h-[180px] flex flex-col justify-center items-center">
        <span className="text-5xl font-bold">02</span>
        <span className="text-xl text-center mt-2">Get $Nectar Token</span>
      </div>
      
      <div className="absolute top-32 right-32 w-[180px] h-[180px] flex flex-col justify-center items-center">
        <span className="text-5xl font-bold">03</span>
        <span className="text-xl text-center mt-2">$Nectar Token In</span>
      </div>
      
      <div className="absolute bottom-24 right-24 w-[180px] h-[180px] flex flex-col justify-center items-center">
        <span className="text-5xl font-bold">04</span>
        <span className="text-xl text-center mt-2">Withdraw In Stablecoins</span>
      </div> */}

      {/* Central jar */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[240px] bg-amber-800 rounded-lg p-4 flex flex-col items-center justify-center shadow-lg">
        <div className="relative w-36 h-44 bg-blue-200 rounded-3xl flex items-center justify-center overflow-hidden">
          <div className="absolute top-2 left-2 right-2 h-8 bg-blue-300 rounded-full flex items-center justify-center">
            <span className="text-gray-800 font-bold">$Nectar</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center content-start gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-yellow-500 rounded-full" />
            ))}
          </div>
          <div className="absolute bottom-2 left-2 right-2 h-8 bg-blue-300 rounded-full flex items-center justify-center">
            <span className="text-gray-800 font-bold">$50</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">Yield Optimization</p>
          <p className="text-xs mt-1">Accumulated yield increases the token's value over time</p>
        </div>
      </div> */}
    </div>
  );
};

export default NectarWorkflow;