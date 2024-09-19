// src/pages/business.tsx
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { ChartBarIcon, ChatBubbleLeftRightIcon, RectangleStackIcon, ShieldCheckIcon, UsersIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

const Business: React.FC = () => {
  const solutions = [
    { title: "Data Analytics", description: "Powerful data analytics tools to drive business insights and inform decision-making.", icon: <ChartBarIcon className="h-6 w-6" /> },
    { title: "Customer Support AI", description: "AI-powered customer support to enhance user experience and streamline support processes.", icon: <ChatBubbleLeftRightIcon className="h-6 w-6" /> },
    { title: "Project Management", description: "Streamline your projects with our advanced management tools and real-time collaboration features.", icon: <RectangleStackIcon className="h-6 w-6" /> },
    { title: "Cybersecurity Suite", description: "Protect your business with state-of-the-art cybersecurity solutions and threat detection.", icon: <ShieldCheckIcon className="h-6 w-6" /> },
    { title: "HR Management", description: "Simplify human resources tasks with our comprehensive HR management platform.", icon: <UsersIcon className="h-6 w-6" /> },
    { title: "Supply Chain Optimization", description: "Enhance your supply chain efficiency with AI-driven optimization and predictive analytics.", icon: <CubeTransparentIcon className="h-6 w-6" /> },
  ];

  return (
    <Layout title="For Business | Lazarev.Cloud">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-black font-semibold tracking-wide uppercase">For Business</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Enterprises
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Leverage our cutting-edge AI and SaaS solutions to optimize your business operations and drive growth.
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

export default Business;