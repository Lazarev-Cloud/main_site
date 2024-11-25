// src/pages/404.tsx
import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <Layout title="404 - Page Not Found | Lazarev.Cloud">
      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-black sm:text-5xl">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-black text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300"
                >
                  Go back home
                </Link>
                <a
                  href="https://youtrack.lazarev.cloud/form/0d2ad302-4d7e-4ef8-9f66-7663602763d4"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
                >
                  Contact support
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;