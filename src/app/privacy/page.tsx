"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";

export default function Privacy() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header onDownloadClick={openDownloadModal} />
      <div className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500">
            Last updated: December 22, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Grimm Technologies (&quot;us&quot;, &quot;we&quot;, or
              &quot;our&quot;) operates the Grimm App software application (the
              &quot;Service&quot;). This Privacy Policy explains how we collect,
              use, and protect your Personal Information when you use the
              Service. By using the Service, you agree to the collection and use
              of information as outlined in this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Information Collection and Use
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While using our Service, we may ask you to provide certain
              personally identifiable information such as your name, email
              address, or other details (&quot;Personal Information&quot;). This
              information is used to improve your experience with the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Log Data
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect information sent by your browser when you access
              the Service (&quot;Log Data&quot;). This data may include your IP
              address, browser type, pages visited, and other diagnostic
              information. We may use third-party services like Google Analytics
              to analyze this data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small files stored on your device to improve your
              experience with the Service. You can disable cookies in your
              browser settings, but doing so may limit some functionality of the
              Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We take the security of your Personal Information seriously and
              implement measures to protect it. However, no method of
              transmission over the Internet or electronic storage is completely
              secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, correct, or delete your Personal
              Information. If required by law, you may also revoke consent for
              the use of your data. To exercise these rights, please contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy is effective as of December 22, 2024, and may
              be updated periodically. Changes will be posted here, and
              continued use of the Service constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@usegrimm.app"
                className="text-green-600 underline hover:text-green-700 transition-colors font-medium"
              >
                support@usegrimm.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
      {/* Modal au niveau racine */}
      {isDownloadModalOpen && (
        <Modal
          isOpen={isDownloadModalOpen}
          content={<DownloadContent />}
          onClose={closeDownloadModal}
          size="large"
        />
      )}
    </div>
  );
}
