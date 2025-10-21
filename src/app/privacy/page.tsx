import Footer from "../components/footer";
import Header from "../components/header";

export default function Privacy() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
          Last updated: December 22, 2024
        </p>

        <p className="mb-6">
          Grimm Technologies (&quot;us&quot;, &quot;we&quot;, or
          &quot;our&quot;) operates the Grimm App software application (the
          &quot;Service&quot;). This Privacy Policy explains how we collect,
          use, and protect your Personal Information when you use the Service.
          By using the Service, you agree to the collection and use of
          information as outlined in this policy.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Information Collection and Use
        </h2>
        <p className="mb-6">
          While using our Service, we may ask you to provide certain personally
          identifiable information such as your name, email address, or other
          details (&quot;Personal Information&quot;). This information is used
          to improve your experience with the Service.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">Log Data</h2>
        <p className="mb-6">
          We may collect information sent by your browser when you access the
          Service (&quot;Log Data&quot;). This data may include your IP address,
          browser type, pages visited, and other diagnostic information. We may
          use third-party services like Google Analytics to analyze this data.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">Cookies</h2>
        <p className="mb-6">
          Cookies are small files stored on your device to improve your
          experience with the Service. You can disable cookies in your browser
          settings, but doing so may limit some functionality of the Service.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">Security</h2>
        <p className="mb-6">
          We take the security of your Personal Information seriously and
          implement measures to protect it. However, no method of transmission
          over the Internet or electronic storage is completely secure.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Your Rights
        </h2>
        <p className="mb-6">
          You have the right to access, correct, or delete your Personal
          Information. If required by law, you may also revoke consent for the
          use of your data. To exercise these rights, please contact us.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          This Privacy Policy is effective as of December 22, 2024, and may be
          updated periodically. Changes will be posted here, and continued use
          of the Service constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:support@usegrimm.app"
            className="text-blue-500 underline"
          >
            support@usegrimm.app
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
