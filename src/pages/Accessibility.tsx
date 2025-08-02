
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Accessibility = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20 pb-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-geo-green-dark">Accessibility Statement</h1>
        <p className="mb-4">
          Makerere University Geography Society is committed to ensuring our website is accessible to all users, including those with disabilities.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Our Commitment</h2>
        <p className="mb-4">
          We strive to meet recognized accessibility standards, including the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Steps We Take</h2>
        <ul className="ml-6 list-disc mb-4">
          <li>Using clear structure with headings, labels, and alternative text for images.</li>
          <li>Ensuring navigation is accessible via keyboard and assistive technologies.</li>
          <li>Providing sufficient color contrast and readable fonts.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Contact for Access Issues</h2>
        <p className="mb-4">
          If you encounter any accessibility issues or need assistance using our website, please email us at mugs.universitygeographysociety@gmail.com. We will do our best to assist you.
        </p>
        <p className="mt-4">
          We welcome feedback and will work to continually improve the accessibility of our site.
        </p>
        <p className="text-gray-500 text-xs mt-6">Last updated: {new Date().getFullYear()}.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Accessibility;
