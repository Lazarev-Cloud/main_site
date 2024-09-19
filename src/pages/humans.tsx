// src/pages/humans.tsx
import React from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { UserIcon, HeartIcon, AcademicCapIcon, HomeIcon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Humans: React.FC = () => {
  const solutions = [
    { title: "Personal Assistant", description: "AI-powered personal assistant to help manage your daily life and boost productivity.", icon: <UserIcon className="h-6 w-6" /> },
    { title: "Health Tracker", description: "Monitor and improve your health with our advanced tracking app and personalized recommendations.", icon: <HeartIcon className="h-6 w-6" /> },
    { title: "Language Learning", description: "Learn new languages efficiently with AI-assisted lessons and real-time feedback.", icon: <AcademicCapIcon className="h-6 w-6" /> },
    { title: "Smart Home Integration", description: "Control and automate your home with our intuitive smart home solutions.", icon: <HomeIcon className="h-6 w-6" /> },
    { title: "Personal Finance Manager", description: "Take control of your finances with our comprehensive budgeting and investment tools.", icon: <CurrencyDollarIcon className="h-6 w-6" /> },
    { title: "Travel Planner", description: "Plan your perfect trip with AI-powered recommendations and itinerary management.", icon: <GlobeAltIcon className="h-6 w-6" /> },
  ];

  return (
    <Layout title="For Humans | Lazarev.Cloud">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-black font-semibold tracking-wide uppercase">For Humans</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Individuals
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover our range of AI-powered solutions designed to enhance your personal life and boost your productivity.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <Card key={index} title={solution.title} description={solution.description} icon={solution.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Humans;