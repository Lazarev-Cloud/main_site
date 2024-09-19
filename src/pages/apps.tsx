// src/pages/apps.tsx
import React from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { BeakerIcon, ChatBubbleBottomCenterTextIcon, ClipboardDocumentListIcon, PresentationChartLineIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Apps: React.FC = () => {
  const apps = [
    { title: "AI Assistant", description: "A powerful AI assistant to help with your daily tasks and boost productivity.", icon: <ChatBubbleBottomCenterTextIcon className="h-6 w-6" /> },
    { title: "Data Analyzer", description: "Advanced data analysis tools for businesses and researchers to gain valuable insights.", icon: <PresentationChartLineIcon className="h-6 w-6" /> },
    { title: "Task Manager", description: "Efficient task management for individuals and teams to streamline workflows.", icon: <ClipboardDocumentListIcon className="h-6 w-6" /> },
    { title: "Health Tracker", description: "Monitor and improve your health with our comprehensive health tracking app.", icon: <BeakerIcon className="h-6 w-6" /> },
    { title: "Team Collaboration", description: "Enhance team productivity with our state-of-the-art collaboration tools.", icon: <UserGroupIcon className="h-6 w-6" /> },
    { title: "Security Suite", description: "Protect your digital assets with our advanced cybersecurity solutions.", icon: <ShieldCheckIcon className="h-6 w-6" /> },
  ];

  return (
    <Layout title="Our Apps | Lazarev.Cloud">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Apps</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Innovative Solutions for Every Need
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore our range of cutting-edge applications designed to enhance your personal and professional life.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app, index) => (
                <Card key={index} title={app.title} description={app.description} icon={app.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Apps;