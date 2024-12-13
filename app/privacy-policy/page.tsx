// pages/terms-of-service.js

import Footer from "../HomeComponents/Footer/page";
import Header from "../HomeComponents/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        {/* <p className="text-xl mb-8">
          Create, Manage, and Grow Your Online Store Across All Industries
        </p> */}
        {/* <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Create Your Store Now
        </button> */}
      </header>
      <div className="container mx-auto py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-3xl">
          <p>
            At Storekode, we are committed to protecting your privacy and the
            confidentiality of your personal information. This privacy policy
            explains how we collect, use, and protect your data.
          </p>

          <h2 className="text-xl font-bold mt-8">1. Information We Collect</h2>
          <p>
            We may collect various types of personal information from you,
            including your name, email address, phone number, and payment
            information.
          </p>

          <h2 className="text-xl font-bold mt-8">
            2. How We Use Your Information
          </h2>
          <p>
            We use your personal information to provide and improve our service,
            fulfill your orders, communicate with you, and comply with legal
            obligations.
          </p>

          <h2 className="text-xl font-bold mt-8">
            3. Sharing Your Information
          </h2>
          <p>
            We may share your personal information with third-party service
            providers who assist us in operating our service. We do not sell or
            rent your personal information to any third parties.
          </p>

          <h2 className="text-xl font-bold mt-8">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="text-xl font-bold mt-8">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information, as well as the right to opt-out of certain data
            processing activities.
          </p>

          <h2 className="text-xl font-bold mt-8">
            6. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any material changes by posting the new privacy policy on our
            website.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
