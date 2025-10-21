import Footer from "../components/footer";
import Header from "../components/header";

export default function Terms() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last Updated: December 22, 2024
        </p>

        <div className="space-y-6">
          <p>
            Welcome to <strong>Grimm App</strong>, your Bitcoin wallet. Please
            read these Terms of Use (&quot;Terms&quot;) carefully before using
            the Grimm App software application (the &quot;Service&quot;),
            operated by Grimm Technologies (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;).
          </p>

          <p>
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who access or use the Service. By
            accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of these Terms, you may not
            access the Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">Content</h2>
          <p>
            Our Service may allow you to manage, store, and share information
            related to your Bitcoin holdings and transactions. You are solely
            responsible for any information or content you provide through the
            Service.
          </p>

          <p>
            By using the Service, you grant us a non-exclusive, worldwide,
            royalty-free license to use, adapt, modify, and display any
            non-personal data necessary for the operation and improvement of the
            Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Links to Third-Party Services
          </h2>
          <p>
            The Service may contain links to third-party websites or services
            that are not owned or controlled by Grimm Technologies. We assume no
            responsibility for the content, privacy policies, or practices of
            any third-party websites or services. Your use of any third-party
            websites or services is at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Acceptable Use
          </h2>
          <p>You agree not to use the Service:</p>
          <ul className="list-disc ml-8 space-y-2">
            <li>In any unlawful, fraudulent, or harmful manner.</li>
            <li>To compromise the security or functionality of the Service.</li>
            <li>To access the Service through unauthorized means.</li>
          </ul>
          <p>
            We reserve the right to terminate access to the Service for
            violations of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Intellectual Property
          </h2>
          <p>
            All content provided through the Service, including logos,
            trademarks, software, and design elements, is the intellectual
            property of Grimm Technologies and protected under applicable
            copyright and trademark laws. You may not reproduce, distribute, or
            otherwise use the content without our explicit written consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Security and Risks
          </h2>
          <p>
            Grimm App does not store private keys, passwords, or recovery
            phrases. It is your responsibility to secure your device and
            maintain the confidentiality of your credentials. We are not liable
            for any loss of funds due to unauthorized access or misuse.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Disclaimer of Warranties
          </h2>
          <p>
            The Service is provided on an &quot;AS IS&quot; and &quot;AS
            AVAILABLE&quot; basis. We make no warranties regarding the
            reliability, availability, or suitability of the Service for your
            purposes. Use of the Service is at your sole risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Grimm Technologies shall not
            be held liable for any damages, including but not limited to loss of
            funds, data, or profits arising from your use or inability to use
            the Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Grimm Technologies from any
            claims, damages, or expenses arising from your use of the Service,
            your violation of these Terms, or your infringement of any rights of
            a third party.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. Any changes
            will be effective immediately upon posting. Continued use of the
            Service after changes constitute your acceptance of the revised
            Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the Republic of Cameroon. Any disputes arising from
            these Terms shall be resolved in the courts of Cameroon.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">Termination</h2>
          <p>
            We may terminate or suspend your access to the Service at any time
            for violations of these Terms. Upon termination, all rights granted
            to you under these Terms will cease immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a
              href="mailto:support@usegrimm.app"
              className="text-blue-600 underline"
            >
              support@usegrimm.app
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
