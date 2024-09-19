// src/pages/privacy.tsx
import React, { useState } from 'react';
import Layout from '@/components/Layout';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900"
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-base">
          {children}
        </div>
      )}
    </div>
  );
};

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout title="Privacy Policy | Lazarev.Cloud">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Last updated: September 18, 2024
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="bg-white shadow sm:rounded-lg p-6">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Welcome to Lazarev Cloud!
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
                  <a
                    href="https://lazarev.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    https://lazarev.cloud
                  </a>, and associated platforms (collectively, the &quot;Site&quot;).
                </p>

                <Accordion title="1. Collection of Your Information">
                  <p>
                    We collect personal data such as name, email address, and phone number when you provide it voluntarily. You are not required to share this data, but certain features may be unavailable if you choose not to.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Personal Data</h3>
                  <p>
                    We may collect personally identifiable information, such as your name, email address, and telephone number, when you voluntarily provide it to us. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Site.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Derivative Data</h3>
                  <p>
                    Our servers automatically collect information when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Financial Data</h3>
                  <p>
                    Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) may be collected when you purchase, order, return, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
                  </p>
                </Accordion>

                <Accordion title="2. Use of Your Information">
                  <p>
                    We use your information to provide, maintain, and improve our services, communicate with you, and for other business purposes as outlined below:
                  </p>
                  <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>To provide, maintain, and improve our Site and Services.</li>
                    <li>To facilitate account creation and logon process.</li>
                    <li>To send administrative information to you.</li>
                    <li>To fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                    <li>To post testimonials with your consent.</li>
                    <li>To deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</li>
                    <li>To send you marketing and promotional communications.</li>
                    <li>To respond to product and customer service requests.</li>
                    <li>To comply with legal obligations and resolve any disputes.</li>
                  </ul>
                </Accordion>

                <Accordion title="3. Disclosure of Your Information">
                  <p>
                    We may disclose your information in the following situations:
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">By Law or to Protect Rights</h3>
                  <p>
                    If we believe release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Third-Party Service Providers</h3>
                  <p>
                    We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                  </p>
                </Accordion>

                <Accordion title="4. Tracking Technologies">
                  <h3 className="mt-4 text-xl font-semibold">Cookies and Web Beacons</h3>
                  <p>
                    We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
                  </p>
                  <p>
                    Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Internet-Based Advertising</h3>
                  <p>
                    We may use third-party software to serve ads on the Site, implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us.
                  </p>
                </Accordion>

                <Accordion title="5. Third-Party Websites">
                  <p>
                    The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy.
                  </p>
                  <p>
                    We cannot guarantee the safety and privacy of information you provide to any third parties. You should exercise caution and review the privacy policies applicable to the third-party websites and services you use.
                  </p>
                </Accordion>

                <Accordion title="6. Security of Your Information">
                  <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or other type of misuse.
                  </p>
                </Accordion>

                <Accordion title="7. Policy for Children">
                  <p>
                    We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
                  </p>
                </Accordion>

                <Accordion title="8. Controls for Do-Not-Track Features">
                  <p>
                    Most web browsers and some mobile operating systems include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
                  </p>
                  <p>
                    As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
                  </p>
                </Accordion>

                <Accordion title="9. Options Regarding Your Information">
                  <h3 className="mt-4 text-xl font-semibold">Account Information</h3>
                  <p>
                    You may at any time review or change the information in your account or terminate your account by:
                  </p>
                  <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>Logging into your account settings and updating your account.</li>
                    <li>Contacting us using the contact information provided below.</li>
                  </ul>
                  <p>
                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use, and/or comply with legal requirements.
                  </p>
                </Accordion>

                <Accordion title="10. GDPR Privacy">
                  <p>
                    If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). Lazarev Cloud aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
                  </p>
                </Accordion>

                <Accordion title="11. CCPA Privacy">
                  <p>
                    If you are a resident of California, you are granted specific rights regarding access to your personal information under the California Consumer Privacy Act (CCPA).
                  </p>
                </Accordion>

                <Accordion title="12. Changes to This Policy">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </Accordion>

                <Accordion title="13. Contact Us">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:{' '}
                    <a href="mailto:support@lazarev.cloud" className="text-indigo-600 underline">
                      support@lazarev.cloud
                    </a>
                  </p>
                  <p>
                    Address: Djure Jakšića 1, Floor 2, 11000 Belgrade, Serbia
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
