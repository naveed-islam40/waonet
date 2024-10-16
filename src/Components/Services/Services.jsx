import React from 'react'
import { ArrowRight, Monitor, PenTool, Smartphone, Search, BarChart2, Share2 } from 'lucide-react'

const services = [
  {
    icon: "/1.png",
    number: '01',
    title: 'Website Design & Development',
    description: 'We create innovative, responsive, and dynamic websites that reflect your brand, build trust, generate leads, and grow your business.',
    color: 'text-[#FFFFFF]',
    bgColor: "bg-gradient-to-b from-[#666ED3] to-[#333]"
  },
  {
    icon: "/Icon_1.png",
    number: '02',
    title: 'Brand Development',
    description: 'Crafting unique and memorable brand identities to elevate your business.',
    color: 'text-[#666ED3]',
    bgColor: "bg-[#F6F6FC]"
  },
  {
    icon: "/Icon_1.png",
    number: '03',
    title: 'Mobile App Development',
    description: 'It is a long-established fact design that a reader will be distracted by the readable content.',
    color: 'text-[#666ED3]',
    bgColor: "bg-[#F6F6FC]"
  },
  {
    icon: "/1.png",
    number: '04',
    title: 'Search Engine Optimization',
    description: 'SEO helps your website appear higher in search engine rankings, driving higher rankings.',
    color: 'text-[#666ED3]',
    bgColor: "bg-[#F6F6FC]"
  },
  {
    icon: "/Icon_1.png",
    number: '05',
    title: 'Digital Marketing',
    description: 'It is a long-established fact design that a reader will be distracted by the readable content.',
    color: 'text-[#666ED3]',
    bgColor: "bg-[#F6F6FC]"
  },
  {
    icon: "/Icon_1.png",
    number: '06',
    title: 'Social Media Marketing & Management',
    description: 'It is a long-established fact design that a reader will be distracted by the readable content.',
    color: 'text-[#666ED3]',
    bgColor: "bg-[#F6F6FC]"
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-[43.92px] font-bold text-center text-[#666ED3] mb-2">Our Services</h2>
      <p className="text-center text-gray-600 mb-12 text-[22px]">Empowering Your Business with tailored digital solutions</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className={`${service.color} ${service.bgColor} p-6 relative overflow-hidden shadow-md`}>
            <img src="/Union.png" alt="" className='absolute bottom-0 right-0 w-[150px]' />
            <div className="flex items-center mb-4">
              <div className="text-[#FFFFFF]">
                <img src={service.icon} alt="" className='w-[70px] ' />
              </div>
              <span className="text-8xl font-bold text-gray-200 absolute top-0 right-0 opacity-50">{service.number}</span>
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${service.color}`}>{service.title}</h3>
            <p className={`text-sm mb-4 ${service.color}`}>{service.description}</p>
            <a href="#" className={`inline-flex items-center text-sm font-medium ${service.color}`}>
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="border w-[200px] h-[46px] border-[#666ED3] text-[#666ED3] rounded-md">
          View All
        </button>
      </div>
    </section>
  )
}