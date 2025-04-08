import { Helmet } from "react-helmet";
import PolicyLayout from "../components/PolicyLayout";

/**
 * Terms of Service page component
 * 
 * @returns The Terms of Service page
 */
const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Mohammad A Alassiri - Technology & AI Expert</title>
        <meta name="description" content="Terms of service for Mohammad A Alassiri's portfolio website. Learn about the terms governing your use of this site." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <PolicyLayout title="Terms of Service">
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">1. Agreement to Terms</h2>
        <p>By accessing or using Mohammad A Alassiri's portfolio website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">2. Intellectual Property</h2>
        <p>The website and its original content, features, and functionality are owned by Mohammad A Alassiri and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">3. User Representations</h2>
        <p>By using the website, you represent and warrant that:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>All registration information you submit will be true, accurate, current, and complete.</li>
          <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
          <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
          <li>You are not a minor in the jurisdiction in which you reside.</li>
          <li>You will not access the website through automated or non-human means, whether through a bot, script, or otherwise.</li>
          <li>You will not use the website for any illegal or unauthorized purpose.</li>
          <li>Your use of the website will not violate any applicable law or regulation.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">4. Prohibited Activities</h2>
        <p>You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
        <p>As a user of the website, you agree not to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li>Make any unauthorized use of the website, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
          <li>Use the website to advertise or offer to sell goods and services.</li>
          <li>Circumvent, disable, or otherwise interfere with security-related features of the website, including features that prevent or restrict the use or copying of any content or enforce limitations on the use of the website and/or the content contained therein.</li>
          <li>Engage in unauthorized framing of or linking to the website.</li>
          <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
          <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
          <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
          <li>Interfere with, disrupt, or create an undue burden on the website or the networks or services connected to the website.</li>
          <li>Attempt to impersonate another user or person or use the username of another user.</li>
          <li>Sell or otherwise transfer your profile.</li>
          <li>Use any information obtained from the website in order to harass, abuse, or harm another person.</li>
          <li>Use the website as part of any effort to compete with us or otherwise use the website and/or the content for any revenue-generating endeavor or commercial enterprise.</li>
          <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the website.</li>
          <li>Attempt to bypass any measures of the website designed to prevent or restrict access to the website, or any portion of the website.</li>
          <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the website to you.</li>
          <li>Delete the copyright or other proprietary rights notice from any content.</li>
          <li>Copy or adapt the website's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
          <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the website or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the website.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">5. Disclaimer</h2>
        <p>The website is provided on an "as is," "as available" basis. You agree that your use of the website and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the website and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">6. Limitations of Liability</h2>
        <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website, even if we have been advised of the possibility of such damages.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">7. Governing Law</h2>
        <p>These Terms shall be governed by and defined following the laws of the Netherlands. Mohammad A Alassiri and yourself irrevocably consent that the courts of the Netherlands shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">8. Changes to Terms</h2>
        <p>We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms of Service, and you waive any right to receive specific notice of each such change.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-glossy-silver">9. Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at:</p>
        <p>Email: me@alassiri.nl</p>
      </PolicyLayout>
    </>
  );
};

export default TermsOfService;