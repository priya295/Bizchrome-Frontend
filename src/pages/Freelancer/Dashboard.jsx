import  { useState } from 'react'
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import { SlHandbag } from "react-icons/sl";


import { FiArrowUpRight,  FiEdit2, FiMoreVertical, FiPlus } from 'react-icons/fi'
import dashboarduser from "../../assets/dashboarduser.png";
const Dashboard = () => {
    const [timeframe, setTimeframe] = useState('Yearly')

   
  return (
    <div className="min-h-screen bg-gray-50 p-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Analytics & Reports */}
      <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl attractive-font mb-[10px] font-semibold">
            Dashboard
          </h1>
          <p>Welcome back, John! 👋</p>
       
        </div>


        {/* Analytics Card */}
        <div className="bg-white rounded-2xl shadow-cs p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Analytics</h2>
            <FiArrowUpRight className="w-5 h-5" />
          </div>
          <div className="flex justify-around mb-6">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#9333EA"
                  strokeWidth="3"
                  strokeDasharray="90, 100"
                />
                <text x="18" y="20.35" className="text-3xl text-[8px] font-medium" textAnchor="middle">
                  90%
                </text>
              </svg>
            </div>
            <div className=" flex items-center flex-col gap-[30px] text-sm">
            <div className="flex items-center bg-[white] shadow-cs rounded-lg gap-[14px]  px-7 py-4 ">
                <SlHandbag className='text-[purple] text-[20px]'/>
                <div className='flex items-center flex-col'>

              <span className="text-black text-[24px] mb-[8px]">90%</span>
              <span className="text-gray-600">Response rate</span>
              </div>
            </div>
            <div className="flex items-center bg-[white] shadow-cs rounded-lg gap-[14px]  px-7 py-4 ">
                <SlHandbag className='text-[purple] text-[20px]'/>
                <div className='flex items-center flex-col'>

              <span className="text-black text-[24px] mb-[8px]">1,298</span>
              <span className="text-gray-600">Order completion</span>
              </div>
            </div>
          </div>
          </div>
          <div className='w-[50%]'>
            <p className='text-center text-[24px] font-semibold attractive-font'>Complete Your Profile</p>
          </div>
        
        </div>
       
        

    

        {/* Active Projects */}
        <div className="bg-white shadow-cs rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">Active projects</h2>
              <span className="text-sm text-gray-500">(12)</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg">
              <FiPlus className="w-4 h-4" />
              Add new project
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm">
                <th className="pb-4">Client Name</th>
                <th className="pb-4">Project</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">Delivered in</th>
                <th className="pb-4">Progress</th>
                <th className="pb-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img src={project.avatar} alt="" className="w-10 h-10 rounded-full" />
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-purple-600">View order</div>
                      </div>
                    </div>
                  </td>
                  <td>{project.type}</td>
                  <td>${project.price}</td>
                  <td>{project.delivery}</td>
                  <td>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="text-right">{project.progress}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column - Profile & Applications */}
      <div className="space-y-8">
        {/* Profile Card */}
        <div className="bg-purple-600 rounded-2xl p-6 text-center text-white">
            <div className='flex items-center justify-center'>
          <img className='h-24 w-24 rounded-full' src={dashboarduser}/>
          </div>
          <h2 className="text-2xl font-medium mb-1">John doe</h2>
          <p className="text-purple-200 mb-4">Ca, California</p>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg mx-auto">
            <FiEdit2 className="w-4 h-4" />
            Edit profile
          </button>
        </div>

        {/* Application Status */}
        <div className="bg-white shadow-cs rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Application status</h2>
            <FiMoreVertical className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-6">
            {applications.map((app) => (
              <div key={app.id} className="space-y-4 pb-[20px] border-b border-[#dbdbdb] ">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium mb-1">{app.role}</div>
                    <div className="text-sm text-gray-500">{app.company}</div>
                    <div className="flex gap-2 mt-2">
                      {app.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${
                      app.status === 'Applied' ? 'text-yellow-600' :
                      app.status === 'Interview' ? 'text-green-600' :
                      'text-red-600'
                    }`}>
                      {app.status}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Applied on {app.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>  
  )
}
const projects = [
    {
      id: 1,
      name: 'Steven Terry',
      avatar: user1,
      type: 'Landing page',
      price: 800,
      delivery: '1 days 2 hours',
      progress: 90
    },
    {
      id: 2,
      name: 'Audrey Jones',
      avatar: user2,
      type: 'Development',
      price: 300,
      delivery: '4 days 8 hours',
      progress: 50
    },
    {
      id: 3,
      name: 'Brian Fisher',
      avatar: user3,
      type: 'Translator',
      price: 180,
      delivery: '14 days 2 hours',
      progress: 95
    },
    {
      id: 4,
      name: 'Molly Mills',
      avatar: user4,
      type: 'Data Analyst',
      price: 920,
      delivery: '8 days 20 hours',
      progress: 20
    }
  ]
  
  const applications = [
    {
      id: 1,
      role: 'Chinese Translator',
      company: 'Tech Troopsy (Jurong East, Singapore)',
      tags: ['Remote', 'Contract'],
      status: 'Applied',
      date: 'Jan 22'
    },
    {
      id: 2,
      role: 'Frontend Developer (Junior Position)',
      company: 'PT Nirlaba Digital Indonesia (Kemang, South Jakarta)',
      tags: ['1-3 years exp', 'Freelance'],
      status: 'Not selected',
      date: 'Jan 09'
    },
    {
      id: 3,
      role: 'Website Designer',
      company: 'Verganis Studio (Sydney, Australia)',
      tags: ['3 months contract'],
      status: 'Interview',
      date: 'Dec 29'
    },
    {
      id: 4,
      role: 'Senior Backend Developer',
      company: 'Ministry of Banking Departerment (Jakarta)',
      status: 'Interview',
      date: 'Dec 20',
      tags: []
    },

  
    
  ]
export default Dashboard