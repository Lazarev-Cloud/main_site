// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 text-black">{icon}</div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <h3 className="text-lg font-medium text-gray-900 truncate">
              {title}
            </h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;