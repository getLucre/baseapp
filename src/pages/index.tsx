import React from "react";
import Head from "@docusaurus/Head";
import Hero from "@site/src/components/Hero";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout description="Start Accepting Bitcoin Payments With 0% Fees.">
      <Head>
          <title>Lucre - Crypto Payment Processor</title>
          <meta property="og:title" content="Lucre - Crypto Payment Processor" />
          <meta name="twitter:title" content="Lucre - Crypto Payment Processor" />

          <meta name="description" content="Accept Bitcoin & Lightning Payments With 0% Fees." />
          <meta property="og:description" content="Accept Bitcoin & Lightning Payments With 0% Fees. Take crypto payment for sales of goods with our censorship-resistant, and secure cryptocurrency payment infrastructure." />
          <meta name="twitter:description" content="Accept Bitcoin & Lightning Payments With 0% Fees. Take crypto payment for sales of goods with our censorship-resistant, and secure cryptocurrency payment infrastructure." />

          <meta property="og:image" content="/meta/meta-tag-img.png" />
          <meta name="twitter:image" content="/meta/meta-tag-img.png" />

          <meta name="keywords" content="Bitcoin, Lightning, Cryptocurrency, Crypto, Crypto Payment, Tokens, Crypto Checkout, Checkout, Payment" />
      </Head>
      <Hero />
    </Layout>
  );
}
