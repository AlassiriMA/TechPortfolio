import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Privacy Policy page component
 * 
 * @returns The Privacy Policy page
 */
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Mohammad A Alassiri - Technology & AI Expert</title>
        <meta name="description" content="Privacy policy for Mohammad A Alassiri's portfolio website. Learn how we handle your data and protect your privacy." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-6 py-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-glossy-gold">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="mb-6">Last updated: April 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">1. Introduction</h2>
            <p>Welcome to Mohammad A Alassiri's portfolio website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">2. Collection of Your Information</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect via the website includes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you choose to contact us via the contact form or email.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.</li>
              <li><strong>Data From Social Networks:</strong> User information from social networking sites, including your name, social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Respond to your inquiries and contact requests.</li>
              <li>Compile anonymous statistical data for research purposes.</li>
              <li>Create and manage your account.</li>
              <li>Deliver targeted content and advertising to you.</li>
              <li>Increase the efficiency and operation of the website.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
              <li>Notify you of updates to the website.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Request feedback and contact you about your use of the website.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              <li><strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</li>
              <li><strong>Interactions with Other Users:</strong> If you interact with other users of the website, those users may see your name, profile photo, and descriptions of your activity.</li>
              <li><strong>Online Postings:</strong> When you post comments, contributions, or other content to the website, your posts may be viewed by all users and may be publicly distributed outside the website in perpetuity.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">5. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">6. Cookie Policy</h2>
            <p>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your computer or device when you visit a website. They help us remember your preferences, understand how you use our site, and improve your experience.</p>
            <p>Types of cookies we use:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
              <li><strong>Functional Cookies:</strong> These help us remember your preferences and settings.</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            </ul>
            <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">7. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>Email: me@alassiri.nl</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;