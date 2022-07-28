import Head from "@docusaurus/Head";
import Hero from "@site/src/components/Hero";
import Layout from "@theme/Layout";
import React from "react";
// import Testimonials from "@site/src/components/Testimonials";

export default function Home(): JSX.Element {
  return (
    <Layout description="Start Accepting Bitcoin Payments With 0% Fees & No Third-party.">
      <Head>
        <title>https://getlucre.xyz - Crypto Payment Processor</title>
      </Head>
      <Hero />
      {/*<Testimonials />*/}
    </Layout>
  );
}
