import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "Makerere University Geography Society - United to Conserve Nature",
  description = "Official website of Makerere University Geography Society (MUGS). Join our community of geography enthusiasts in Uganda. Explore field trips, research opportunities, and conservation initiatives.",
  keywords = "Makerere University, Geography Society, MUGS, Uganda, geography students, field trips, conservation, environmental science, GIS, mapping, spatial analysis, climate change, urban planning",
  canonical = "https://mugs.lovable.app/",
  ogImage = "https://mugs.lovable.app/lovable-uploads/ab88620e-3c2f-4622-8a52-e4d1eb42af3f.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;