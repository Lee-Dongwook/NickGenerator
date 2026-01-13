import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "NickGen Privacy Policy. Learn how we handle your data and protect your privacy while using our nickname generator service.",
};

const PrivacyPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <article className="card-glow rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-300 mb-6">
              Last updated: January 2026
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-300 mb-4">
              Welcome to NickGen. We respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we
              collect, use, and safeguard your information when you visit our
              website and use our nickname generation services.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-slate-300 mb-4">
              NickGen is designed with privacy in mind. We do not require user
              accounts, and we do not collect personal information such as
              names, email addresses, or payment details. The only data we may
              collect includes:
            </p>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>
                <strong>Usage Data:</strong> Anonymous information about how you
                interact with our website, including pages visited and features
                used.
              </li>
              <li>
                <strong>Technical Data:</strong> Browser type, device type, and
                general location data for analytics purposes.
              </li>
              <li>
                <strong>Cookies:</strong> We use essential cookies to ensure the
                website functions properly, and analytics cookies to improve our
                service.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-300 mb-4">
              Any data collected is used solely for:
            </p>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>Improving and optimizing our nickname generation service</li>
              <li>Understanding how users interact with our website</li>
              <li>Ensuring website security and preventing abuse</li>
              <li>Displaying relevant advertisements through Google AdSense</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-slate-300 mb-4">
              We use the following third-party services that may collect data:
            </p>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>
                <strong>Google AdSense:</strong> For displaying advertisements.
                Google may use cookies to personalize ads based on your browsing
                history.
              </li>
              <li>
                <strong>Google Analytics:</strong> For understanding website
                traffic and user behavior.
              </li>
            </ul>
            <p className="text-slate-300 mb-4">
              You can opt out of personalized advertising by visiting Google Ads
              Settings or using browser extensions designed to block tracking.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              5. Data Security
            </h2>
            <p className="text-slate-300 mb-4">
              We implement appropriate technical and organizational measures to
              protect any data we collect. However, no method of transmission
              over the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-slate-300 mb-4">
              Depending on your location, you may have certain rights regarding
              your data, including:
            </p>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>The right to access information we hold about you</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of certain data collection</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              7. Children Privacy
            </h2>
            <p className="text-slate-300 mb-4">
              NickGen is not directed at children under 13 years of age. We do
              not knowingly collect personal information from children. If you
              believe a child has provided us with personal data, please contact
              us immediately.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-slate-300 mb-4">
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              9. Contact Us
            </h2>
            <p className="text-slate-300">
              If you have any questions about this privacy policy or our
              practices, please contact us through our About page or by reaching
              out via the contact information provided there.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPage;
