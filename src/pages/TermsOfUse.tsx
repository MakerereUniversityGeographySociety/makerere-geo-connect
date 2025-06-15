
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20 pb-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-geo-green-dark">Terms of Use</h1>
        <p className="mb-4">
          By accessing or using the Makerere University Geography Society website (“Site”), you agree to comply with these Terms of Use. Please read them carefully.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Permitted Use</h2>
        <p className="mb-4">
          The Site is intended for educational, informational, and community communication purposes only. All content is for non-commercial use unless otherwise stated.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Content Ownership and Intellectual Property</h2>
        <p className="mb-4">
          Content on this Site, unless otherwise credited, is the property of Makerere University Geography Society. You may not copy, distribute, or use any content without permission.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">User Conduct</h2>
        <ul className="ml-6 list-disc mb-4">
          <li>Do not post, share, or upload inappropriate, offensive, or unlawful content.</li>
          <li>Respect the privacy and rights of others in interactions on the Site.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h2>
        <p className="mb-4">
          Information on the Site is provided in good faith for educational purposes. We do not guarantee its completeness or accuracy and are not liable for any loss arising from use of this Site.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">External Links</h2>
        <p className="mb-4">
          The Site may contain links to third-party websites. We are not responsible for their content or practices.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
        <p className="mb-4">
          These Terms may be updated from time to time. By continuing to use the Site, you accept any changes.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4">
          For questions regarding our Terms of Use, please contact us at mugs.universitygeographysociety@gmail.com.
        </p>
        <p className="text-gray-500 text-xs">Last updated: {new Date().getFullYear()}.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfUse;
