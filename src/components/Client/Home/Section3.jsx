import React from 'react'
import { Users, UserCheck, MessageCircle, Briefcase } from 'lucide-react'

const Section3 = () => {
    const steps = [
        {
            icon: <Users className="mb-4 w-8 h-8 text-blue-500" />,
            title: "Select Categories",
            description: "Choose the skills you need for your project."
        },
        {
            icon: <UserCheck className="mb-4 w-8 h-8 text-green-500" />,
            title: "Pick Your Freelancer",
            description: "Find the expert who fits your needs."
        },
        {
            icon: <MessageCircle className="mb-4 w-8 h-8 text-yellow-500" />,
            title: "Chat with Freelancers",
            description: "Discuss your ideas and plan ahead."
        },
        {
            icon: <Briefcase className="mb-4 w-8 h-8 text-purple-500" />,
            title: "Work Seamlessly Together",
            description: "Collaborate to bring your vision to life!"
        }
    ]

    return (
        <div className="mx-auto px-4 py-8 container">
            <h1 className="mb-8 font-bold text-3xl text-center">Meet the Freelancers Behind Your Projects!</h1>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center bg-white custom-shadow p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
                        {step.icon}
                        <h2 className="mb-2 font-semibold text-xl">{step.title}</h2>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section3