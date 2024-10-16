export default function About() {
  return (
    <div className="min-h-screen bg-[#F1F2FB] flex items-center justify-center p-4 relative">
      <div className="rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
            <img src="/Design.png" alt="" className="absolute left-28 bottom-48 w-[151px]" />
            <img src="/Union_1.png" alt="" className="absolute right-0 bottom-0 w-[275px]" />
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 rounded-full md:m-8 max-sm:static">
              <img
                src="/Image.png"
                alt="CEO"
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="mb-4">
              <span className="bg-gradient-to-r from-[#666ED3] to-[#35396D] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">Our Mission</span>
            </div>
            <h1 className="text-2xl font-bold mb-2 text-[#35396D]">
              Amazing Design, <span className="text-indigo-600">Quality Solution</span>, Reliable Service!
            </h1>
            <p className="text-gray-600 mb-4">
              Our mission is to empower your business with personalized digital solutions that drive growth and enhance brand visibility. We are dedicated to helping you succeed in the digital landscape and achieve your business goals.
            </p>
            <h2 className="text-xl font-semibold mb-2 text-[#666ED3]">CEO's Message</h2>
            <p className="text-gray-600 mb-6">
              At WebsiteNet, we believe in working with you as a partner and not just as a client. Our talented team works closely with you to create a powerful Brand Voice that truly resonates with your audience. We are committed to delivering amazing designs, quality solutions, and consistent service that inspire lifelong success. Let us help you build a brand that connects with your customers and drives lasting growth.
            </p>
            <button className="border-[#666ED3] border text-[#666ED3] w-[200px] py-2 rounded-md font-[600]">
              Meet My Team
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}