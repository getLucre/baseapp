import Pricing from "@site/src/components/Pricing";
import Layout from "@theme/Layout";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <Layout title="Pricing" description="Start Accepting Bitcoin Payments With 0% Fees & No Third-party.">
      <Pricing />
    </Layout>
  );
}
