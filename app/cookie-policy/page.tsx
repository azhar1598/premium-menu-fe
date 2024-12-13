// pages/terms-of-service.js

import Footer from "../HomeComponents/Footer/page";
import Header from "../HomeComponents/Header";

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
        {/* <p className="text-xl mb-8">
          Create, Manage, and Grow Your Online Store Across All Industries
        </p> */}
        {/* <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Create Your Store Now
        </button> */}
      </header>
      <div className="container mx-auto py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-3xl">
          <p>
            This cookie policy explains how Storekode uses cookies and similar
            technologies on our digital service.
          </p>

          <h2 className="text-xl font-bold mt-8">1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you
            visit a website or use an application. They help our service
            remember information about your visit, like your preferred language
            or login information.
          </p>

          <h2 className="text-xl font-bold mt-8">2. Types of Cookies We Use</h2>
          <p>We use the following types of cookies on our service:</p>
          <ul className="list-disc pl-6">
            <li>
              Essential Cookies: These cookies are necessary for the operation
              of our service and cannot be disabled.
            </li>
            <li>
              Analytical Cookies: These cookies help us understand how you use
              our service, which allows us to improve it.
            </li>
            <li>
              Functional Cookies: These cookies enable certain features and
              preferences to enhance your experience.
            </li>
            <li>
              Advertising Cookies: These cookies are used to deliver relevant
              ads and track the effectiveness of our advertising campaigns.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8">3. Managing Cookies</h2>
          <p>
            You can manage or disable cookies through your web browser's
            settings. However, disabling cookies may affect the functionality of
            our service.
          </p>

          <h2 className="text-xl font-bold mt-8">
            4. Changes to this Cookie Policy
          </h2>
          <p>
            We may update this cookie policy from time to time. We will notify
            you of any material changes by posting the new policy on our
            website.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
