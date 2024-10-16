
const projects = [
  { id: 1, title: 'An Emerging Online Shopping Hub: A Marketplace Connecting Buyers to Products of All Scales', image: '/Group.png', category: 'Development' , icon: "/CirclesThreePlus.png", bgColor: "bg-[#666DD3]", color: "text-[#FFFFFF]", shadowColor: " shadow-[#666ED385]"},
  { id: 2, image: '/Group_1.png', category: 'Design' , icon: "/pen-tool.png", bgColor: "bg-[#FFFFFF]", color: "text-[#797E88]", shadowColor: " shadow-[#0000001A]"},
  { id: 3, image: '/Group_2.png', category: 'Development' , icon: "/GitBranch.png", bgColor: "bg-[#FFFFFF]", color: "text-[#797E88]", shadowColor: " shadow-[#0000001A]"},
  { id: 4, image: '/Group_3.png', category: 'Design' , icon: "/NotePencil.png", bgColor: "bg-[#FFFFFF]", color: "text-[#797E88]", shadowColor: " shadow-[#0000001A]"},
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
     <div className="flex justify-between items-end">
     <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B3447]">
        Embracing the Future <br />
        <span className="text-[#666ed2]">of Our Work</span>
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {projects.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-md text-sm font-medium ${filter.bgColor} transition-colors flex justify-center items-center gap-3 ${filter.color} shadow-lg ${filter.shadowColor}`}
          >
            <img src={filter.icon} alt="" className={`w-[20px] ${filter.color}`} />
            {filter.category}
          </button>
        ))}
      </div>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-white rounded-lg overflow-hidden shadow-md ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <img
              src={project.image}
              alt={project.title || `Project ${project.id}`}
              width={index === 0 ? 600 : 300}
              height={index === 0 ? 400 : 200}
              className={`w-full h-auto object-cover w-[${index === 0 ? 600 : 300}px] h-[${index === 0 ? 600 : 200}px]`}
            />
            {index === 0 && (
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">Our Website Project</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}