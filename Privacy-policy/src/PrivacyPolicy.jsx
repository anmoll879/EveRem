import React from "react";
import "./Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy – EveRem</h1>
        <p className="privacy-updated">
          <strong>Last Updated:</strong> February 5, 2026
        </p>

        <p className="privacy-text">
          EveRem respects your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, store, and protect your data when you use our mobile application.
          By using EveRem, you agree to the practices described in this policy.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you create an account or log in to EveRem, we may collect basic
            account information such as your email address and authentication
            credentials. This information is used only for account
            authentication, security, and providing access to app features.
          </p>
          <p>
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>2. Reminder Data</h2>
          <p>When you use the app to create reminders, we store information such as:</p>
          <ul>
            <li>Reminder title</li>
            <li>Reminder description</li>
            <li>Reminder date and time</li>
            <li>
              Notification timing preferences (for example, 5 minutes before,
              15 minutes before, 30 minutes before, or other selected timing)
            </li>
          </ul>
          <p>
            This data is required to provide the core functionality of the
            application, including scheduling and triggering reminders at the
            correct time.
          </p>
        </section>

        <section>
          <h2>3. Device and Notification Information</h2>
          <p>
            To deliver notifications, EveRem may collect device-related
            information such as:
          </p>
          <ul>
            <li>Firebase Cloud Messaging (FCM) token</li>
            <li>Notification permission status</li>
          </ul>
          <p>
            This information is used only to send reminder notifications and
            improve notification delivery performance. Users can disable
            notifications at any time through their device settings.
          </p>
        </section>

        <section>
          <h2>4. Data Storage and Security</h2>
          <p>
            EveRem may store data securely on backend servers and locally on your
            device to ensure reminders work properly, even if the device is
            offline.
          </p>
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access, misuse, or disclosure. However, no
            method of data transmission or storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>
            We do not sell or rent user data. However, we may use trusted
            third-party services such as:
          </p>
          <ul>
            <li>Firebase Cloud Messaging</li>
            <li>Cloud hosting providers</li>
          </ul>
          <p>
            These services support core app functionality and operate under
            their own privacy and security policies.
          </p>
        </section>

        <section>
          <h2>6. User Rights and Data Management</h2>
          <p>Users have the right to:</p>
          <ul>
            <li>View, update, or delete their reminder data</li>
            <li>Manage notification preferences</li>
            <li>Request account deletion (if supported)</li>
          </ul>
          <p>
            User data may be removed from our systems upon request. We retain
            data only for as long as necessary to provide app services and
            improve user experience.
          </p>
        </section>

        <section>
          <h2>7. Children’s Privacy</h2>
          <p>
            EveRem is not intended for children under the age of 13. We do not
            knowingly collect personal data from children. If we discover that
            data from a child has been collected unintentionally, we will take
            steps to delete it.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any updates
            will be reflected by revising the “Last Updated” date at the top of
            this policy.
          </p>
          <p>
            Continued use of EveRem after updates means you accept the revised
            policy.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            your data, you can contact us at:
          </p>
          <p className="privacy-contact">
            📧 <a href="mailto:everem@gmail.com">everem@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
