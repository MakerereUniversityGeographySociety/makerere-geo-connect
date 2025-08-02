
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20 pb-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-geo-green-dark">Privacy Policy</h1>
        <p className="mb-4">
          Makerere University Geography Society (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="ml-6 list-disc mb-4">
          <li>Information you provide directly, such as your name, email address, and other contact details when registering or contacting us.</li>
          <li>Technical information collected automatically, such as IP address, browser type, device information, and pages you visit.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <ul className="ml-6 list-disc mb-4">
          <li>To provide and improve our services and website.</li>
          <li>To communicate with you about events, news, or updates you have requested.</li>
          <li>To respond to your inquiries.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell or share your personal information with third parties except as required by law or with your explicit consent.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect your information. Please note, however, that no website can guarantee complete security.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Children&apos;s Privacy</h2>
        <p className="mb-4">
          Our website is not intended for children under 13. We do not knowingly collect personal information from children.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at mugs.universitygeographysociety@gmail.com.
        </p>
        <p className="text-gray-500 text-xs">Last updated: {new Date().getFullYear()}.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
