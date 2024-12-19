import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to our application. By accessing or using our services, you agree to be bound by the terms and conditions set forth below.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By using this application, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. Use of the Service
        </h2>
        <p className="text-gray-600 mb-4">
          You agree not to misuse the service or help anyone else to do so. This includes, but is not limited to, unauthorized access to the system or other users' data.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. User Responsibilities
        </h2>
        <p className="text-gray-600 mb-4">
          You are responsible for the content you upload and share on this platform. Ensure that your activities comply with applicable laws and respect the rights of others.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update or modify these terms at any time. Your continued use of the service after any changes indicates your acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          5. Termination
        </h2>
        <p className="text-gray-600 mb-4">
          We may suspend or terminate your access to the service at any time if you violate these terms or for any other reason deemed necessary.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          6. Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about these terms, please contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline"
          >
            support@example.com
          </a>.
        </p>

        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
