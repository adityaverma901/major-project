import NavDash from '@/components/nav-dash';
import React from 'react';

const DeveloperCard = () => {
  const developers = [
    {
      name: "Aditya Verma",
      role: "Full Stack Developer",
      expertise: "React, NextJS TypeScript, TailwindCSS",
      image: "/WhatsApp Image 2024-11-08 at 10.55.30_7b2e4cdf.jpg"
    },
    {
      name: "Anukriti Khare",
      role: "Full Stack Developer",
      expertise: "Node.js, Python, PostgreSQL",
      image: "/anu.png"
    },
    {
      name: "Prakarsh Yadav",
      role: "Front-end Engineer",
      expertise: "Html, CSS, JavaScript, React",
      
      image: "/prakarsh.png"
    },
    {
      name: "Ananya Gupta",
      role: "Cloud Engineer",
      expertise: "AWS,Kubernetes,Terraform",
     

      image: "./anan.jpg "
    }
  ];

  return (
    <>
    <NavDash/>
    <div className="container mx-auto py-12 px-4">
        {/* <NavDash /> */}
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Development Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {developers.map((dev, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="p-6">
              <div className="w-48 h-48 relative mb-4 overflow-hidden  items-center justify-center rounded-lg">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{dev.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{dev.role}</p>
            </div>
            
            {/* Card Content */}
            <div className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  {/* <p className="font-medium">Experience: {dev.experience}</p> */}
                  <p className="text-gray-600 dark:text-gray-400">Expertise: {dev.expertise}</p>
                </div>
                
                </div>
              </div>
            </div>
        
        ))}
    </div>
    </div>
    </>
  );
};

export default DeveloperCard;