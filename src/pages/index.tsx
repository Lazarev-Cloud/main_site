import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to Lazarev.Cloud</span>
              <span className="block text-black">AI and SaaS for Everyone</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We provide cutting-edge AI and SaaS applications for individuals
              and businesses. Boost your productivity and streamline your
              operations with our innovative solutions.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/apps"
                  className="w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-white bg-black hover:bg-white hover:text-black md:py-4 md:text-lg md:px-10"
                >
                  Explore Our Apps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Solutions for Everyone
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Whether you&apos;re an individual looking to boost your productivity
                or a business aiming to optimize operations, we have the perfect
                solution for you.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <Link
                    href="/humans"
                    className="flex items-center justify-center px-5 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:bg-black hover:text-white"
                  >
                    For Humans
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/business"
                    className="flex items-center justify-center px-5 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:bg-black hover:text-white"
                  >
                    For Business
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              {/* You can add images or icons here to represent your services */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;