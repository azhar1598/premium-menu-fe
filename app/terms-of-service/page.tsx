// pages/terms-of-service.js

import Footer from "../HomeComponents/Footer/page";
import Header from "../HomeComponents/Header";

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Terms Of Service</h1>
        {/* <p className="text-xl mb-8">
          Create, Manage, and Grow Your Online Store Across All Industries
        </p> */}
        {/* <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Create Your Store Now
        </button> */}
      </header>
      <div className="container mx-auto py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-3xl">
          <p>
            Welcome to our digital service! By accessing or using our service,
            you agree to be bound by these terms of service and our privacy
            policy.
          </p>

          <h2 className="text-xl font-bold mt-8">1. Introduction</h2>
          <p>
            These terms of service ("Terms") govern your access to and use of
            our digital service, including any content, functionality, and
            services offered on or through our website or application.
          </p>

          <h2 className="text-xl font-bold mt-8">2. User Accounts</h2>
          <p>
            To use our service, you may be required to create an account. You
            are responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
          </p>

          <h2 className="text-xl font-bold mt-8">3. User Conduct</h2>
          <p>
            You agree to use our service only for lawful purposes and in a way
            that does not infringe on the rights of others or restrict or
            inhibit their use and enjoyment of the service.
          </p>

          <h2 className="text-xl font-bold mt-8">4. Intellectual Property</h2>
          <p>
            Our service and all of its content are the property of StoreKode and
            are protected by copyright, trademark, and other intellectual
            property laws.
          </p>

          <h2 className="text-xl font-bold mt-8">5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our
            service at any time for any reason, including if we reasonably
            believe you have violated these Terms.
          </p>

          <h2 className="text-xl font-bold mt-8">
            6. Disclaimer of Warranties
          </h2>
          <p>
            Our service is provided "as is" and we make no representations or
            warranties of any kind, express or implied, about the operation of
            our service or the information, content, materials, or products
            included in it.
          </p>

          <h2 className="text-xl font-bold mt-8">7. Limitation of Liability</h2>
          <p>
            In no event shall StoreKode be liable for any indirect, special,
            incidental, or consequential damages arising out of or in connection
            with your use of our service.
          </p>

          <h2 className="text-xl font-bold mt-8">8. Governing Law</h2>
          <p>
            These Terms and your use of our service shall be governed by and
            construed in accordance with the laws of [Jurisdiction].
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
