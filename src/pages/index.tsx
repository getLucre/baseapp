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

          <meta name="description" content="Lucre helps you take crypto (Bitcoin & Lightning) payments for goods and services worldwide (both online and in a physical store), with full control / rights to your money." />
          <meta property="og:description" content="Lucre helps you take crypto (Bitcoin & Lightning) payments for goods and services worldwide (both online and in a physical store), with full control / rights to your money." />
          <meta name="twitter:description" content="Lucre helps you take crypto (Bitcoin & Lightning) payments for goods and services worldwide (both online and in a physical store), with full control / rights to your money." />

          <meta property="og:image" content="/meta/meta-tag-img.png" />
          <meta name="twitter:image" content="/meta/meta-tag-img.png" />

          <meta name="keywords" content="Bitcoin, Lightning, Cryptocurrency, Crypto, Crypto Payment, Tokens, Crypto Checkout, Checkout, Payment" />
      </Head>
      <Hero />
    </Layout>
  );
}
