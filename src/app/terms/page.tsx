"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";

export default function Terms() {
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
            Terms of Use
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500">
            Last Updated: December 22, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Welcome to{" "}
              <strong className="text-green-600 font-semibold">
                Grimm App
              </strong>
              , your Bitcoin wallet. Please read these Terms of Use
              (&quot;Terms&quot;) carefully before using the Grimm App software
              application (the &quot;Service&quot;), operated by Grimm
              Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            </p>

            <p className="text-gray-600 leading-relaxed">
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who access or use the Service.
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of these Terms, you may not
              access the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Content
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our Service may allow you to manage, store, and share information
              related to your Bitcoin holdings and transactions. You are solely
              responsible for any information or content you provide through the
              Service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using the Service, you grant us a non-exclusive, worldwide,
              royalty-free license to use, adapt, modify, and display any
              non-personal data necessary for the operation and improvement of
              the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Links to Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Service may contain links to third-party websites or services
              that are not owned or controlled by Grimm Technologies. We assume
              no responsibility for the content, privacy policies, or practices
              of any third-party websites or services. Your use of any
              third-party websites or services is at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Acceptable Use
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree not to use the Service:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li className="leading-relaxed">
                In any unlawful, fraudulent, or harmful manner.
              </li>
              <li className="leading-relaxed">
                To compromise the security or functionality of the Service.
              </li>
              <li className="leading-relaxed">
                To access the Service through unauthorized means.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate access to the Service for
              violations of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content provided through the Service, including logos,
              trademarks, software, and design elements, is the intellectual
              property of Grimm Technologies and protected under applicable
              copyright and trademark laws. You may not reproduce, distribute,
              or otherwise use the content without our explicit written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Security and Risks
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Grimm App does not store private keys, passwords, or recovery
              phrases. It is your responsibility to secure your device and
              maintain the confidentiality of your credentials. We are not
              liable for any loss of funds due to unauthorized access or misuse.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Service is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis. We make no warranties regarding the
              reliability, availability, or suitability of the Service for your
              purposes. Use of the Service is at your sole risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, Grimm Technologies shall
              not be held liable for any damages, including but not limited to
              loss of funds, data, or profits arising from your use or inability
              to use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Indemnification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify and hold harmless Grimm Technologies from
              any claims, damages, or expenses arising from your use of the
              Service, your violation of these Terms, or your infringement of
              any rights of a third party.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. Any
              changes will be effective immediately upon posting. Continued use
              of the Service after changes constitute your acceptance of the
              revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the Republic of Cameroon. Any disputes arising from
              these Terms shall be resolved in the courts of Cameroon.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your access to the Service at any time
              for violations of these Terms. Upon termination, all rights
              granted to you under these Terms will cease immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at:{" "}
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
