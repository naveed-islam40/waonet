import { useState, useEffect } from 'react'

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#33376a] to-[#1b052e] text-white relative overflow-hidden">
        <img src="/Vector.png" alt="" className='absolute bottom-0 ' />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-[16px] md:text-xl font-semibold mb-2 bg-gray-400 w-max px-3 py-1 rounded-full bg-opacity-40">Web Development and Digital Marketing Agency</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Digital <br /> Marketing Experts</h1>
            <p className="text-lg mb-6 opacity-80">
              At WacoNet, we use digital tools to elevate your brand and drive growth. With expertise in web and mobile development, social media management, and SEO, we create tailored strategies to boost engagement and visibility. Partner with WacoNet and watch your brand thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#666ED3] text-white font-bold py-3 px-6 rounded-md transition duration-300">
                Schedule Appointment
              </button>
             <div className='flex justify-center items-center'>
             <div className='border-2 rounded-[50%] p-1'>
             <img src="/play.png" alt="play" className='h-[37px] w-[37px] p-2 bg-white rounded-[50%]' />
             </div>
             <button className="bg-transparent text-white font-semibold py-3 px-6 rounded-full border-white transition duration-300 flex items-center justify-center">
                
                Watch Demo
              </button>
             </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-64 md:h-96">
              <img
                src="Frame.png"
                alt="Digital Marketing Illustration"
                className="drop-shadow-2xl w-[500px] h-[550px]"
              />
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/10 backdrop-blur-sm rounded-lg p-2 shadow-lg"
                  style={{
                    top: `${20 + i * 25}%`,
                    left: `${10 + i * 20}%`,
                    transform: `rotate(${i * 5}deg)`,
                  }}
                >
                  <div className="w-8 h-1 bg-purple-400 rounded mb-1" />
                  <div className="w-12 h-1 bg-purple-300 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}