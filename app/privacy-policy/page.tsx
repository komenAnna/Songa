import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="my-40 bg-white tesxt-black min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm md:text-base">
          Welcome to Songa! We are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use
          our ride-sharing services. By using our app, you agree to the terms outlined in this policy.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>1. Information We Collect</strong>
          <br/>
          We may collect the following types of information when you use our app:
          - Personal Information: This includes your name, email address, phone number, and payment information.
          - Location Information: We collect your location data to provide ride-sharing services, including pickup and
          drop-off locations.
          - Usage Information: We may gather data about how you interact with our app, such as the routes you take and
          the times you use our services.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>2. How We Use Your Information</strong>
          <br/>
          We use your information for the following purposes:
          - To provide you with ride-sharing services and facilitate transactions.
          - To improve our services, including app functionality and user experience.
          - To send you notifications, updates, and promotional offers.
          - To ensure the safety and security of our users and drivers.
          - To comply with legal requirements and resolve disputes.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>3. Information Sharing</strong>
          <br/>
          We may share your information with the following entities:
          - Drivers: Your name, location, and ride details are shared with drivers to fulfill ride requests.
          - Payment Processors: We share payment information with third-party payment processors for transaction
          processing.
          - Legal Requirements: We may disclose information in response to legal requests or to protect our rights,
          privacy, safety, or property.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>4. Data Security</strong>
          <br/>
          We take reasonable measures to protect your data from unauthorized access, disclosure, alteration, and
          destruction. However, no data transmission over the internet is entirely secure, and we cannot guarantee the
          security of your information.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>5. Your Choices</strong>
          <br/>
          You have the following rights regarding your personal information:
          - You can review and update your information in the app settings.
          - You can opt out of promotional communications by adjusting your settings.
          - You can delete your account, but please note that some data may be retained for legal or operational
          purposes.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>6. Changes to this Privacy Policy</strong>
          <br/>
          We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will
          be posted on our app, and your continued use of our services constitutes your acceptance of these changes.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>7. Contact Us</strong>
          <br/>
          If you have questions or concerns about this Privacy Policy or our data practices, please contact us at <a
          href="mailto:info@songa.app" className="underline text-green-500">info@songa.app</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
