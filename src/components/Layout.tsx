// src/components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Lazarev.Cloud' }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI and SaaS applications for humans and businesses" />
        <link rel="icon" href="https://cdn.lazarev.cloud/small_logo.svg" />
      </Head>

      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5 md:h-6 md:w-6" 
                  data-id="16"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
                <span className="ml-2 text-xl font-bold">Lazarev.Cloud</span>
              </Link>
            </div>            <div className="flex items-center">
              <Link href="/apps" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Our Apps</Link>
              <Link href="/humans" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">For Humans</Link>
              <Link href="/business" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">For Business</Link>
              <a href="https://n8n.lazarev.cloud/form/contact-form" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-black hover:text-white">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-500">&copy; 2024 Lazarev.Cloud. All rights reserved.</p>
            <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;